import { useNavigate } from 'react-router-dom';
import classes from './Map.module.css';
function Map() {
  const navigate = useNavigate();
  return (
    <div className={classes.mapContainer} onClick={() => navigate('form')}>
      Map
    </div>
  );
}

export default Map;
