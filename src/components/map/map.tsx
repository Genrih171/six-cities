import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useRef, useEffect } from 'react';

import useMap from '../../hooks/use-map';
import { TypePage } from '../../const';

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

function Map({mapAnchor, places, typePage}: MapProps) {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, mapAnchor);

  const defaultIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconAnchor: [13, 39],
  });

  // const currentIcon = L.icon({
  //   iconUrl: 'img/pin-active.svg',
  //   iconAnchor: [13, 39],
  // });

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        L.marker({
          lat: place.latitude,
          lng: place.longitude
        }, {
          icon: defaultIcon
        }).addTo(map);
      });
    }
  }, [map, places, defaultIcon]);

  return (
    <section ref={mapRef} className={`${typePage}__map map`} style={typePage === TypePage.OFFER ? {marginLeft: '20%', width: '60%'} : undefined} ></section>
  );
}

export default Map;
