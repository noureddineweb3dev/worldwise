import classes from './CountryItem.module.css';
import { countryCodeToFlag, getFlagSrc } from '../../utils/flags';

function CountryItem({ country }) {
  return (
    <li className={classes.countryItem}>
      <span>
        {getFlagSrc(country.emoji) ? (
          <img
            src={getFlagSrc(country.emoji)}
            alt={`${country.country} flag`}
            width="24"
            height="18"
          />
        ) : (
          countryCodeToFlag(country.emoji) || country.emoji
        )}
      </span>
      <h3>{country.country}</h3>
    </li>
  );
}
export default CountryItem;
