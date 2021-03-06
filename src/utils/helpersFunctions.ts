import {format} from 'date-fns';

import pt from 'date-fns/locale/pt';

export const formatDate = (date: Date, formatStr: string) => {
  return format(date, formatStr, {
    locale: pt,
  });
};

export const firstLetterToUpperCase = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
