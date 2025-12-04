import { Link } from 'react-router-dom';
import classes from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link className={classes.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={classes.emoji}>{emoji}</span>
        <h3 className={classes.name}>{cityName}</h3>
        <time className={classes.date}>{formatDate(date)}</time>
        <button className={classes.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
