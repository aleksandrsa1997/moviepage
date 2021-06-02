import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from '../public/locales/en/translation.json';
import translationRu from '../public/locales/ru/translation.json';
import translationAz from '../public/locales/az/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRu
    },
    az: {
        translation: translationAz
    }
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;