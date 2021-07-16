import React, { FunctionComponent } from 'react';
import { Styles } from './Button.styles';
import type { IButtonProps } from './Button.types';
import './button.module.scss';

export const Button: FunctionComponent<IButtonProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div {...root}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia accusamus
      fugit, ex libero totam unde voluptas officia necessitatibus optio, enim,
      dignissimos mollitia quidem placeat maiores aliquam expedita possimus
      praesentium id.
    </div>
  );
};

export default Button;
