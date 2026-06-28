import 'server-only';
import { cache } from 'react';

export const getDictionary = cache(async (lang: string) => {
  return (await import(`@/dictionaries/${lang}.json`)).default;
});
