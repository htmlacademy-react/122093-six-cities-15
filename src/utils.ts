import dayjs from 'dayjs';
import { COMMENT_DATE_FORMAT, ISO_DATE_FORMAT } from './const';

function getRatingWidth(rating: number) {
  const roundNumber = Math.round(rating);
  return `${roundNumber * 20}%`;
}

function getImageSize(size: string) {
  return size === 'small' ? {width:'150', height:'110'} : {width:'260', height:'200'};
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function humanizeDate(date: string): string {
  return date ? dayjs(date).format(COMMENT_DATE_FORMAT) : '';
}

function formatDateToISO(date: string): string {
  return date ? dayjs(date).format(ISO_DATE_FORMAT) : '';
}

const pluralize = (count: number, noun: string, suffix = 's', pluralNoun?: string) => {
  if (count <= 1) {
    return `${count} ${noun}`;
  }

  const pluralForm = pluralNoun ? `${pluralNoun}` : `${noun}${suffix}`;
  return `${count} ${pluralForm}`;
};

export {getRatingWidth, getImageSize, capitalizeFirstLetter, humanizeDate, formatDateToISO, pluralize};
