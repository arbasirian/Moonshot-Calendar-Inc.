import React, { FC } from 'react';

import { MapLunchMarkerPropsType } from 'common/models';

const MapLunchMarkerComponent: FC<MapLunchMarkerPropsType> = ({
  title,
  ...props
}) => {
  return <div {...props}>{title}</div>;
};

export default MapLunchMarkerComponent;
