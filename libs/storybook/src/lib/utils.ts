import { SECTIONS } from './constants';
import format from 'string-format';

export interface IConstants {
  [key: string]: string;
}

export interface IGetTitle {
  title: string;
  section?: string;
}

export const getFullTitle = ({ title, section }: IGetTitle): string =>
  format(
    '{}/{}',
    !section || !(SECTIONS as IConstants)[section]
      ? ''
      : (SECTIONS as IConstants)[section],
    title
  );
