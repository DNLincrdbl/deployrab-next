'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  });

  useEffect(() => {
    try {
      // Get stored consent
      const storedConsent = localStorage.getItem('cookieConsent');
      
      // If no stored consent, show banner
      if (!storedConsent) {
        setTimeout(() => setShowConsent(true), 1500);
        return;
      }

      // Try to parse stored consent
      let parsedConsent;
      try {
        parsedConsent = JSON.parse(storedConsent);
      } catch (e) {
        // If parsing fails, clear storage and show banner
        localStorage.removeItem('cookieConsent');
        setTimeout(() => setShowConsent(true), 1500);
        return;
      }

      // Validate parsed consent structure
      if (
        parsedConsent &&
        typeof parsedConsent === 'object' &&
        'necessary' in parsedConsent &&
        typeof parsedConsent.necessary === 'boolean' &&
        'analytics' in parsedConsent &&
        typeof parsedConsent.analytics === 'boolean' &&
        'marketing' in parsedConsent &&
        typeof parsedConsent.marketing === 'boolean' &&
        'personalization' in parsedConsent &&
        typeof parsedConsent.personalization === 'boolean'
      ) {
        setPreferences(parsedConsent);
      } else {
        // If invalid structure, clear storage and show banner
        localStorage.removeItem('cookieConsent');
        setTimeout(() => setShowConsent(true), 1500);
      }
    } catch (error) {
      // If any other error occurs, clear storage and show banner
      console.error('Cookie consent error:', error);
      localStorage.removeItem('cookieConsent');
      setTimeout(() => setShowConsent(true), 1500);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowConsent(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
        >
          {!showPreferences ? (
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie beállítások</h3>
                  <p className="text-sm text-gray-600">
                    Weboldalunk cookie-kat használ a felhasználói élmény javítása és a webhely működése érdekében. 
                    A szükséges cookie-k mindig engedélyezve vannak, de Ön dönthet a további cookie-k használatáról.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-w-[300px]">
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Testreszabás
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Elutasítás
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Elfogadás
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie beállítások</h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Szükséges cookie-k */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Szükséges cookie-k</h4>
                      <p className="text-sm text-gray-600">
                        Ezek a cookie-k szükségesek a weboldal működéséhez, nem kapcsolhatók ki.
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="h-4 w-4 text-primary border-gray-300 rounded cursor-not-allowed opacity-50"
                      />
                    </div>
                  </div>

                  {/* Analitikai cookie-k */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Analitikai cookie-k</h4>
                      <p className="text-sm text-gray-600">
                        Segítenek megérteni, hogyan használják a látogatók a weboldalt.
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="h-4 w-4 text-primary border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Marketing cookie-k */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Marketing cookie-k</h4>
                      <p className="text-sm text-gray-600">
                        Segítenek személyre szabott hirdetéseket megjeleníteni.
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="h-4 w-4 text-primary border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Személyre szabási cookie-k */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Személyre szabási cookie-k</h4>
                      <p className="text-sm text-gray-600">
                        A weboldal funkcióinak és tartalmának személyre szabásához használjuk.
                      </p>
                    </div>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={preferences.personalization}
                        onChange={(e) => setPreferences({ ...preferences, personalization: e.target.checked })}
                        className="h-4 w-4 text-primary border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Minden elutasítása
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Beállítások mentése
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent; 