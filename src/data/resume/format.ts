import type { Month, Profile } from './types';

export const formatMonth = (month: Month) => {
  const [year, monthNumber] = month.split('-');
  return `${monthNumber}/${year}`;
};

export const formatPeriod = (start: Month, end: Month | 'Present') =>
  `${formatMonth(start)} - ${end === 'Present' ? 'Present' : formatMonth(end)}`;

export const formatLocation = ({ city, country, workMode }: Pick<Profile, 'city' | 'country' | 'workMode'>) =>
  `${city}, ${country} (${workMode})`;

export const phoneHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
