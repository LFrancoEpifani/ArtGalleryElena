import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './src/locales/en/common.json';
import esTranslation from './src/locales/es/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: 'en', // Idioma predeterminado en caso de no coincidencia
    debug: true, // Habilitar el modo de depuración
    interpolation: {
      escapeValue: false, // Evitar la escapada automática de HTML
    },
  });

export default i18n;