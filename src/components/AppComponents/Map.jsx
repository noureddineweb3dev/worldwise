import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCities } from '../../contexts/CitiesContext';
import { useGeolocation } from '../../hooks/useGeolocation';

import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import Button from '../AppComponents/Button';
import { countryCodeToFlag, getFlagSrc } from '../../utils/flags';
import classes from './Map.module.css';
import { useUrlLocation } from '../../hooks/useUrlLocation';

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();
  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlLocation();

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  return (
    <div className={classes.mapContainer}>
      {!geolocationPosition && (
        <Button btnType="position" onClick={getPosition} disabled={isLoadingPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use my location'}
        </Button>
      )}
      <MapContainer center={mapPosition} scrollWheelZoom={true} className={classes.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          const cityPosition = [city.position.lat, city.position.lng];
          return (
            <Marker key={city.id} position={cityPosition}>
              <Popup>
                <span>
                  {getFlagSrc(city.emoji) ? (
                    <img
                      src={getFlagSrc(city.emoji)}
                      alt={`${city.cityName} flag`}
                      width="24"
                      height="18"
                    />
                  ) : (
                    countryCodeToFlag(city.emoji) || city.emoji
                  )}
                </span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
        <ChangeView position={mapPosition} />
        <DetectMapClick />
      </MapContainer>
    </div>
  );
}

function ChangeView({ position }) {
  const map = useMap();
  map.setView(position, 7);
  return null;
}

function DetectMapClick() {
  const navigate = useNavigate();
  useMapEvents({
    click(e) {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
}

export default Map;
