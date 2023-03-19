import { useCallback } from "react";
import { i18n } from "../config/i18n";

export const useLocales = () => {
  const translate = useCallback((text: string) => {
    return i18n.t(text);
  }, [])

  return {
    translate,
  }
}
