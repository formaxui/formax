import React, { FunctionComponent } from 'react';
import { Base } from '@formaxui/base';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';
import './button.module.scss';

export const Button: FunctionComponent<IButtonProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <Base children="Example button" {...rest} {...root} />;
};

export default Button;
