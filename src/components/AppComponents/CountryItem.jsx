import classes from './CountryItem.module.css';

function CountryItem({ country }) {
  return (
    <li className={classes.countryItem}>
      <span>{country.emoji}</span>
      <h3>{country.country}</h3>
    </li>
  );
}
export default CountryItem;
