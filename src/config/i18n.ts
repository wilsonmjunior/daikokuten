import { ptBR, en } from './../locales';

import { I18n } from "i18n-js";
import { getLocales } from 'expo-localization';

const translations = { en, ptBR };

const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode;
i18n.enableFallback = true;

export {
  i18n,
}
