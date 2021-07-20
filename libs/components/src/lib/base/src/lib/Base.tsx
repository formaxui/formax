import React, { FunctionComponent } from 'react';
import { Styles } from './Base.styles';
import type { IBaseProps } from './Base.types';
import './base.module.scss';

export const Base: FunctionComponent<IBaseProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <div {...rest} {...root} />;
};

export default Base;
