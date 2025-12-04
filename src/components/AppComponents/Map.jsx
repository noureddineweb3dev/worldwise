import { useNavigate, useSearchParams } from 'react-router-dom';
import classes from './Map.module.css';
function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={classes.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
    </div>
  );
}

export default Map;
