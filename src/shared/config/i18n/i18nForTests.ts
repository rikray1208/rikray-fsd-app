import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
      lng: 'en',
      fallbackLng: 'en',
      ns: ['translationsNS'],
      defaultNS: 'translationsNS',
      debug: true,
      interpolation: {
          escapeValue: false, // not needed for react!!
      },
      resources: {
          en: {
              translationsNS: {
                  lang: 'en'
              }
          } ,
          ua: {
              translationsNS: {
                  lang: 'ua'
              }
          }
      },
  });

export default i18n;