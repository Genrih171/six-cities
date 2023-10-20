import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useRef, useEffect } from 'react';

import useMap from '../../hooks/use-map';

type MapProps = {
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  places: {
    latitude: number;
    longitude: number;
    zoom: number;
    }[];
}

function Map({city, places}: MapProps) {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city.location);

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
    <section ref={mapRef} className="cities__map map"></section>
  );
}

export default Map;
