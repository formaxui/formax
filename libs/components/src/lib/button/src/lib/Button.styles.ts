import { style } from '@formaxui/utils';
import type { IButtonStyleProps } from './Button.types';

// eslint-disable-next-line
export const Styles = ({}: IButtonStyleProps) => {
  return {
    root: style({
      cursor: 'default',
      backgroundColor: '#0d6efd',
      borderColor: '#0d6efd',
      color: '#ffffff',
      display: 'inline-block',
      fontWeight: 400,
      lineHeight: 1.5,
      textAlign: 'center',
      textDecoration: 'none',
      verticalAlign: 'middle',
      userSelect: 'none',
      padding: '.375rem .75rem',
      fontSize: '1rem',
      borderRadius: '.25rem',
      textTransform: 'none',
      boxSizing: 'border-box',
      appearance: 'button',
      fontFamily:
        'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      transition:
        'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    }),
  };
};

export default Styles;
