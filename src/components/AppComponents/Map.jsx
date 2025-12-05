import { useNavigate, useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import classes from './Map.module.css';
import { useState } from 'react';
import { useCities } from '../../contexts/CitiesContext';
function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={classes.mapContainer} onClick={() => navigate('form')}>
      <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={classes.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          const cityPosition = [city.position.lat, city.position.lng];
          return (
            <Marker key={city.id} position={cityPosition}>
              <Popup>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
