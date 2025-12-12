import { Link } from 'react-router-dom';
import classes from './CityItem.module.css';
import { useCities } from '../../contexts/CitiesContext';
import { countryCodeToFlag, getFlagSrc } from '../../utils/flags';

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { formatDate, currentCity, deleteCity } = useCities();

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${classes.cityItem} ${
          id === currentCity.id ? classes['cityItem--active'] : ''
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={classes.emoji}>
          {getFlagSrc(emoji) ? (
            <img src={getFlagSrc(emoji)} alt={`${cityName} flag`} width="24" height="18" />
          ) : (
            countryCodeToFlag(emoji) || emoji
          )}
        </span>
        <h3 className={classes.name}>{cityName}</h3>
        <time className={classes.date}>{formatDate(date)}</time>
        <button className={classes.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
