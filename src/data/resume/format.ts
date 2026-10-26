import type { Month } from './types';

export const formatMonth = (month: Month) => {
  const [year, monthNumber] = month.split('-');
  return `${monthNumber}/${year}`;
};

export const formatPeriod = (start: Month, end: Month | 'Present') =>
  `${formatMonth(start)} - ${end === 'Present' ? 'Present' : formatMonth(end)}`;
