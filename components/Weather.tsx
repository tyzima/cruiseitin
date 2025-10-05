import React, { useEffect, useState } from 'react';
import { WeatherForecast } from '../types';
import { WeatherService } from '../services/weatherService';

interface WeatherProps {
  lat: number;
  lng: number;
  dayString: string;
}

const Weather: React.FC<WeatherProps> = ({ lat, lng, dayString }) => {
  const [weatherData, setWeatherData] = useState<WeatherForecast | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const weatherService = WeatherService.getInstance();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // Parse the date from the day string
        const targetDate = weatherService.parseDateFromDayString(dayString);
        if (!targetDate) {
          setError('Unable to parse date from day string');
          return;
        }

        // Fetch weather forecast
        const forecast = await weatherService.getWeatherForecast(lat, lng, 10);
        if (!forecast) {
          setError('Unable to fetch weather data');
          return;
        }

        // Find weather for the specific date
        const dayWeather = weatherService.findWeatherForDate(forecast, targetDate);
        setWeatherData(dayWeather);
      } catch (err) {
        setError('Failed to load weather information');
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lng, dayString, weatherService]);

  const getTemperatureDisplay = (degrees: number, unit: string): string => {
    // Convert Celsius to Fahrenheit if needed
    let fahrenheit = degrees;
    if (unit === 'CELSIUS') {
      fahrenheit = (degrees * 9/5) + 32;
    }
    return `${Math.round(fahrenheit)}°F`;
  };

  const getWindSpeedDisplay = (value: number, unit: string): string => {
    if (unit === 'KILOMETERS_PER_HOUR') {
      return `${value} km/h`;
    }
    return `${value} ${unit.toLowerCase()}`;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium text-gray-700">Loading weather forecast</span>
        </div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-500">!</span>
          </div>
          <span className="text-sm font-medium text-gray-700">Weather data unavailable</span>
        </div>
      </div>
    );
  }

  const getWeatherIcon = (type: string) => {
    switch (type) {
      case 'CLEAR': return (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      );
      case 'PARTLY_CLOUDY': return (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5 12c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .8-.2 1.5-.5 2.2l-.8-.8c.2-.5.3-1 .3-1.4 0-2-1.6-3.6-3.6-3.6s-3.6 1.6-3.6 3.6c0 .4.1.9.3 1.4l-.8.8c-.3-.7-.5-1.4-.5-2.2z"/>
          <path d="M17 15H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h10c1.7 0 3-1.3 3-3s-1.3-3-3-3z"/>
        </svg>
      );
      case 'CLOUDY': return (
        <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 15H5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3 0 .7 0 1 .1C6.5 4.6 8.8 3 11.5 3c3 0 5.5 2.5 5.5 5.5 0 .8-.2 1.5-.5 2.2.8.3 1.5 1 1.5 1.8 0 1.1-.9 2-2 2z"/>
        </svg>
      );
      case 'RAIN': case 'SCATTERED_SHOWERS': return (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 15H5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3 0 .7 0 1 .1C6.5 4.6 8.8 3 11.5 3c3 0 5.5 2.5 5.5 5.5 0 .8-.2 1.5-.5 2.2.8.3 1.5 1 1.5 1.8 0 1.1-.9 2-2 2z"/>
          <path d="M8 18l2-4M12 18l2-4M16 18l2-4"/>
        </svg>
      );
      case 'THUNDERSTORM': return (
        <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 15H5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3 0 .7 0 1 .1C6.5 4.6 8.8 3 11.5 3c3 0 5.5 2.5 5.5 5.5 0 .8-.2 1.5-.5 2.2.8.3 1.5 1 1.5 1.8 0 1.1-.9 2-2 2z"/>
          <path d="M13 16l-2 4h3l-2 4"/>
        </svg>
      );
      case 'SNOW': return (
        <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 15H5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3 0 .7 0 1 .1C6.5 4.6 8.8 3 11.5 3c3 0 5.5 2.5 5.5 5.5 0 .8-.2 1.5-.5 2.2.8.3 1.5 1 1.5 1.8 0 1.1-.9 2-2 2z"/>
          <path d="M10 17h4M8 19h8M10 21h4"/>
        </svg>
      );
      case 'FOG': return (
        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 15H5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.3 0 .7 0 1 .1C6.5 4.6 8.8 3 11.5 3c3 0 5.5 2.5 5.5 5.5 0 .8-.2 1.5-.5 2.2.8.3 1.5 1 1.5 1.8 0 1.1-.9 2-2 2z"/>
          <path d="M6 18h12M8 20h8M10 22h4"/>
        </svg>
      );
      default: return (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      );
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        {/* Left side - Weather icon and condition */}
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {getWeatherIcon(weatherData.daytimeForecast.weatherCondition.type)}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-gray-900 leading-tight">
              {weatherData.daytimeForecast.weatherCondition.description.text}
            </h4>
            <p className="text-xs text-gray-500 mt-0.5">
              {getTemperatureDisplay(weatherData.maxTemperature.degrees, weatherData.maxTemperature.unit)} / {getTemperatureDisplay(weatherData.minTemperature.degrees, weatherData.minTemperature.unit)}
            </p>
          </div>
        </div>

        {/* Right side - Weather metrics */}
        <div className="flex items-center space-x-6 text-right">
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Precipitation</div>
            <div className="text-sm font-semibold text-gray-900 mt-0.5">
              {weatherData.daytimeForecast.precipitation.probability.percent}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Wind</div>
            <div className="text-sm font-semibold text-gray-900 mt-0.5">
              {getWindSpeedDisplay(weatherData.daytimeForecast.wind.speed.value, weatherData.daytimeForecast.wind.speed.unit)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
