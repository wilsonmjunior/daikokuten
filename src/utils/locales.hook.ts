import { useCallback } from "react"

import { EnLocaleType } from './../locales/en'
import { PtBRLocaleType } from "../locales/pt-br"
import { i18n } from "./i18n"

type LocaleType = EnLocaleType | PtBRLocaleType

export const useLocales = () => {
  const translate = useCallback((text: LocaleType) => {
    return i18n.t(text)
  }, [])

  return {
    translate,
  }
}
