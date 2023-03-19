import { headings } from './headings'
import { labels } from "./labels"

export const ptBR = {
  ...labels,
  ...headings
}

export type PtBRLocaleType = keyof typeof ptBR
