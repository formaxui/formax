import React, { FunctionComponent } from 'react';
import { Base } from '@formaxui/base';
import { Styles } from './Titlebar.styles';
import type { ITitleBarProps } from './Titlebar.types';
import './titlebar.module.scss';

export const TitleBar: FunctionComponent<ITitleBarProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return <Base children="TitleBar component" {...rest} {...root} />;
};

export default TitleBar;
