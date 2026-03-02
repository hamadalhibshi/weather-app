// Mock data for the UI (day/condition use translation keys)
export const CURRENT = {
    temp: 22,
    feelsLike: 21,
    conditionKey: "partlyCloudy" as const,
    location: "San Francisco, CA",
    humidity: 65,
    wind: 12,
    high: 24,
    low: 16,
  };
  
  export const HOURLY = [
    {
      timeKey: "now" as const,
      timeFallback: "Now",
      temp: 22,
      icon: "weather-partly-cloudy" as const,
    },
    { timeFallback: "2p", temp: 23, icon: "weather-sunny" as const },
    { timeFallback: "4p", temp: 24, icon: "weather-sunny" as const },
    { timeFallback: "6p", temp: 21, icon: "weather-partly-cloudy" as const },
    {
      timeFallback: "8p",
      temp: 18,
      icon: "weather-night-partly-cloudy" as const,
    },
    { timeFallback: "10p", temp: 17, icon: "weather-night" as const },
    { timeFallback: "12a", temp: 16, icon: "weather-night" as const },
  ];
  
  export const DAILY = [
    {
      dayKey: "today" as const,
      high: 24,
      low: 16,
      icon: "weather-partly-cloudy" as const,
    },
    { dayKey: "wed" as const, high: 26, low: 15, icon: "weather-sunny" as const },
    {
      dayKey: "thu" as const,
      high: 23,
      low: 14,
      icon: "weather-cloudy" as const,
    },
    {
      dayKey: "fri" as const,
      high: 25,
      low: 16,
      icon: "weather-partly-cloudy" as const,
    },
    { dayKey: "sat" as const, high: 27, low: 17, icon: "weather-sunny" as const },
    {
      dayKey: "sun" as const,
      high: 24,
      low: 15,
      icon: "weather-partly-cloudy" as const,
    },
  ];

  export const FORECAST = [
    {
      day: "Today",
      date: "Feb 17",
      high: 24,
      low: 16,
      icon: "weather-partly-cloudy" as const,
      condition: "Partly cloudy",
      precip: 10,
    },
    {
      day: "Wednesday",
      date: "Feb 18",
      high: 26,
      low: 15,
      icon: "weather-sunny" as const,
      condition: "Sunny",
      precip: 0,
    },
    {
      day: "Thursday",
      date: "Feb 19",
      high: 23,
      low: 14,
      icon: "weather-cloudy" as const,
      condition: "Cloudy",
      precip: 60,
    },
    {
      day: "Friday",
      date: "Feb 20",
      high: 25,
      low: 16,
      icon: "weather-partly-cloudy" as const,
      condition: "Partly cloudy",
      precip: 20,
    },
    {
      day: "Saturday",
      date: "Feb 21",
      high: 27,
      low: 17,
      icon: "weather-sunny" as const,
      condition: "Sunny",
      precip: 0,
    },
    {
      day: "Sunday",
      date: "Feb 22",
      high: 24,
      low: 15,
      icon: "weather-partly-cloudy" as const,
      condition: "Partly cloudy",
      precip: 30,
    },
    {
      day: "Monday",
      date: "Feb 23",
      high: 22,
      low: 14,
      icon: "weather-rainy" as const,
      condition: "Rain",
      precip: 80,
    },
  ];

  // Mock saved locations – replace with real state/API later
export const SAVED_LOCATIONS = [
  {
    id: "1",
    name: "San Francisco",
    region: "CA, USA",
    isDefault: true,
    temp: 22,
    condition: "Partly cloudy",
  },
  {
    id: "2",
    name: "New York",
    region: "NY, USA",
    isDefault: false,
    temp: 18,
    condition: "Cloudy",
  },
  {
    id: "3",
    name: "London",
    region: "UK",
    isDefault: false,
    temp: 12,
    condition: "Rain",
  },
];