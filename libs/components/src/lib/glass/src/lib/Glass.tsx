import React, { FunctionComponent } from 'react';
import { Styles } from './Glass.styles';
import type { IGlassProps } from './Glass.types';
import 'glass.module.scss';

export const Glass: FunctionComponent<IGlassProps> = ({ ...rest }) => {
  const { root } = Styles({});

  return (
    <div {...root}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
      temporibus est architecto facere perferendis rem iste, incidunt iure ea
      molestiae excepturi consectetur. At cupiditate ipsam facere error
      deleniti, in voluptatibus.
    </div>
  );
};

export default Glass;
