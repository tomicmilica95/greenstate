import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';

import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enTranslation
    }
  },
  keySeparator: '.',
  interpolation: { escapeValue: false },
  lng: 'en'
});

export default i18n;
