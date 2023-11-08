import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useRef, useEffect } from 'react';

import useMap from '../../hooks/use-map';

type MapProps = {
  mapAnchor: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  places: {
    latitude: number;
    longitude: number;
    zoom: number;
  }[];
  typePage: string;
}

const defaultIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconAnchor: [13, 39],
});

// const currentIcon = L.icon({
//   iconUrl: 'img/pin-active.svg',
//   iconAnchor: [13, 39],
// });

function Map({mapAnchor, places, typePage}: MapProps) {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, mapAnchor);

  useEffect(() => {
    if (map) {
      const markerLayer = L.layerGroup().addTo(map);

      places.forEach((place) => {
        L.marker({
          lat: place.latitude,
          lng: place.longitude
        }, {
          icon: defaultIcon
        }).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, places]);

  return (
    <section
      ref={mapRef}
      className={`${typePage}__map map`}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      }}
    />
  );
}

export default Map;
