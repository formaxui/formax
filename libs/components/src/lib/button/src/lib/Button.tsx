import React, { FunctionComponent } from 'react';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';
import './button.module.scss';

export const Button: FunctionComponent<IButtonProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <Button children="Example button" {...rest} />;
};

export default Button;
