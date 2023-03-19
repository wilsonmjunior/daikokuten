import { headings } from './headings'
import { labels } from './labels'

export const en = {
  ...labels,
  ...headings
}

export type EnLocaleType = keyof typeof en
