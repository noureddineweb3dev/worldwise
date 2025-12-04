import { Link } from 'react-router-dom';
import classes from './CityItem.module.css';
import { useCities } from '../../contexts/CitiesContext';

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { formatDate, currentCity } = useCities();
  return (
    <li>
      <Link
        className={`${classes.cityItem} ${
          id === currentCity.id ? classes['cityItem--active'] : ''
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={classes.emoji}>{emoji}</span>
        <h3 className={classes.name}>{cityName}</h3>
        <time className={classes.date}>{formatDate(date)}</time>
        <button className={classes.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
