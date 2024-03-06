import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../hooks/use-map';
import { City } from '../types/city';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../types/offer';

type MapProps = {
  currentLocation: City;
  currentOffers: Offer[];
  activeOffer: string | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({currentLocation, currentOffers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, currentLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach((currentOffer) => {
        const marker = new Marker({
          lat: currentOffer.location.latitude,
          lng: currentOffer.location.longitude
        });

        marker
          .setIcon(
            activeOffer !== undefined && currentOffer.id === activeOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, currentOffers, activeOffer]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
