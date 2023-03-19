import { labels } from './labels';

export const en = {
  ...labels,
  greeting: "Hello",
  farewell: "Goodbye"
}

export type EnLocaleType = typeof en;
