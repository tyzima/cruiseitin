import { WeatherResponse } from '../types';

const GOOGLE_WEATHER_API_KEY = import.meta.env.VITE_GOOGLE_WEATHER_API_KEY;

export class WeatherService {
  private static instance: WeatherService;
  private cache: Map<string, WeatherResponse> = new Map();
  private cacheExpiry: Map<string, number> = new Map();
  private readonly CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

  static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  async getWeatherForecast(lat: number, lng: number, days: number = 10): Promise<WeatherResponse | null> {
    const cacheKey = `${lat},${lng},${days}`;
    const now = Date.now();

    // Check cache first
    if (this.cache.has(cacheKey) && this.cacheExpiry.has(cacheKey)) {
      const expiry = this.cacheExpiry.get(cacheKey)!;
      if (now < expiry) {
        return this.cache.get(cacheKey)!;
      }
    }

    if (!GOOGLE_WEATHER_API_KEY) {
      console.error('Google Weather API key not found. Please set VITE_GOOGLE_WEATHER_API_KEY environment variable.');
      return null;
    }

    try {
      const url = `https://weather.googleapis.com/v1/forecast/days:lookup?key=${GOOGLE_WEATHER_API_KEY}&location.latitude=${lat}&location.longitude=${lng}&days=${days}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Weather API request failed: ${response.status} ${response.statusText}`);
      }

      const data: WeatherResponse = await response.json();

      // Cache the result
      this.cache.set(cacheKey, data);
      this.cacheExpiry.set(cacheKey, now + this.CACHE_DURATION);

      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }

  findWeatherForDate(weatherData: WeatherResponse | null, targetDate: Date): WeatherResponse['forecastDays'][0] | null {
    if (!weatherData || !weatherData.forecastDays) {
      return null;
    }

    const targetYear = targetDate.getFullYear();
    const targetMonth = targetDate.getMonth() + 1; // JavaScript months are 0-indexed
    const targetDay = targetDate.getDate();

    return weatherData.forecastDays.find(day => 
      day.displayDate.year === targetYear &&
      day.displayDate.month === targetMonth &&
      day.displayDate.day === targetDay
    ) || null;
  }

  parseDateFromDayString(dayString: string): Date | null {
    // Parse strings like "Day 1: Sunday, October 5 - New York, NY"
    const match = dayString.match(/(\w+), (\w+) (\d+)/);
    if (!match) {
      return null;
    }

    const [, dayName, monthName, day] = match;
    const monthMap: { [key: string]: number } = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3,
      'May': 4, 'June': 5, 'July': 6, 'August': 7,
      'September': 8, 'October': 9, 'November': 10, 'December': 11
    };

    const month = monthMap[monthName];
    if (month === undefined) {
      return null;
    }

    // Assume current year for the cruise
    const year = new Date().getFullYear();
    return new Date(year, month, parseInt(day));
  }
}
