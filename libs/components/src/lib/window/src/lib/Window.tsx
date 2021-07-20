import React, { FunctionComponent } from 'react';
import { Base } from '@formaxui/base';
import { Styles } from './Window.styles';
import type { IWindowProps } from './Window.types';
import './window.module.scss';

export const Window: FunctionComponent<IWindowProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <Base children="Window component" {...rest} {...root} />;
};

export default Window;
