'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface WeatherData {
  temp: number;
  feels_like: number;
  humidity: number;
  description: string;
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
        const lang = i18n.language;

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
  }, [i18n.language]);

  if (error) {
    return (
      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-elegant border border-white/10">
        <p className="text-red-500">{t('weather.error')}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-elegant border border-white/10">
        <div className="flex justify-center items-center h-32">
          <div className="w-6 h-6 border-2 border-white/60 rounded-full animate-spin border-t-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-elegant border border-white/10">
      {weather && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-2xl font-bold text-white">
                {weather.temp}°C
              </div>
              <div className="text-sm text-white/80 capitalize">
                {weather.description}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/60">{t('weather.humidity')}</div>
                <div className="text-sm font-medium text-white">{weather.humidity}%</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 13C16 13 14.5 15 12 15C9.5 15 8 13 8 13" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-white/60">{t('weather.feels_like')}</div>
                <div className="text-sm font-medium text-white">{weather.feels_like}°C</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
