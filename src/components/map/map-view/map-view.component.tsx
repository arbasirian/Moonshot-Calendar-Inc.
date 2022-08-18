import React, { FC } from 'react';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const MapViewComponent: FC = () => {
  const containerStyle = {
    width: '100%',
    height: '100vh',
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
  });

  if (!isLoaded) return <>Loading ...</>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
};

export default MapViewComponent;
