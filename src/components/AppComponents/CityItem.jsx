import classes from './CityItem.module.css';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CityItem({ city }) {
  return (
    <li className={classes.cityItem}>
      <span className={classes.emoji}>{city.emoji}</span>
      <h3 className={classes.name}>{city.cityName}</h3>
      <time className={classes.date}>{formatDate(city.date)}</time>
      <button className={classes.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
