export interface Location {
  name: string;
  address: string;
  distance: string;
  type: 'tourist' | 'hidden gem';
  source: string | null;
  image_url: string | null;
  description: string;
  lat: number;
  lng: number;
}

export interface ItineraryDay {
  day: string;
  port_address: string;
  port_lat: number;
  port_lng: number;
  return_to: string;
  eats: Location[];
  attractions: Location[];
}

export interface WeatherCondition {
  iconBaseUri: string;
  description: {
    text: string;
    languageCode: string;
  };
  type: string;
}

export interface WeatherForecast {
  interval: {
    startTime: string;
    endTime: string;
  };
  displayDate: {
    year: number;
    month: number;
    day: number;
  };
  daytimeForecast: {
    weatherCondition: WeatherCondition;
    precipitation: {
      probability: {
        percent: number;
        type: string;
      };
    };
    wind: {
      direction: {
        cardinal: string;
      };
      speed: {
        value: number;
        unit: string;
      };
    };
  };
  nighttimeForecast: {
    weatherCondition: WeatherCondition;
    precipitation: {
      probability: {
        percent: number;
        type: string;
      };
    };
  };
  maxTemperature: {
    degrees: number;
    unit: string;
  };
  minTemperature: {
    degrees: number;
    unit: string;
  };
}

export interface WeatherResponse {
  forecastDays: WeatherForecast[];
  timeZone: {
    id: string;
  };
}

export interface ItineraryData {
  itinerary: ItineraryDay[];
}