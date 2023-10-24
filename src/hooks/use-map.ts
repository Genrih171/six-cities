import {useEffect, useState, useRef} from 'react';
import L from 'leaflet';

type MapAnchor = {
  latitude: number;
  longitude: number;
  zoom: number;
}

function useMap(mapRef: React.MutableRefObject<HTMLElement | null>, mapAnchor: MapAnchor) {
  const [map, setMap] = useState<null | L.Map>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapRef.current, {
        center: {
          lat: mapAnchor.latitude,
          lng: mapAnchor.longitude,
        },
        zoom: mapAnchor.zoom,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, mapAnchor]);

  return map;
}

export default useMap;
