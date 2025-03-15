'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface WeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
  icon: string;
}

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = 44.7500;
        const lon = 14.7667;
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const lang = i18n.language; // 'hu' vagy 'en'

        if (!API_KEY) {
          throw new Error('API kulcs hiányzik');
        }
        
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`
        );
        
        if (!response.ok) {
          throw new Error(`Időjárás API hiba: ${response.statusText}`);
        }

        const data = await response.json();
        
        setWeather({
          temp: Math.round(data.main.temp),
          feels_like: Math.round(data.main.feels_like),
          humidity: data.main.humidity,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Hiba az időjárás lekérése során:', error);
        setError(error instanceof Error ? error.message : 'Ismeretlen hiba');
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 1800000);
    
    return () => clearInterval(interval);
  }, [i18n.language]); // Újra futtatjuk, ha változik a nyelv

  if (error) {
    return (
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-[280px]">
        <p className="text-red-500">{t('weather.error')}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-[280px]">
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#007AFF]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-[280px] transform hover:scale-105 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
        {t('weather.title')}
      </h3>
      {weather && (
        <div className="flex flex-col items-center">
          <div className="relative">
            <img 
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              width={80}
              height={80}
              className="filter drop-shadow-md"
            />
          </div>
          <p className="text-4xl font-bold mb-2 text-gray-900">{weather.temp}°C</p>
          <p className="text-gray-600 capitalize mb-3 text-center">{weather.description}</p>
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{t('weather.feels_like')}:</span>
              <span className="font-medium">{weather.feels_like}°C</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{t('weather.humidity')}:</span>
              <span className="font-medium">{weather.humidity}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
