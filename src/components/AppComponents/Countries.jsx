import classes from './Countries.module.css';
import { useCities } from '../../contexts/CitiesContext';
import CountryItem from './CountryItem';

function Countries() {
  const { cities } = useCities();
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={classes.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
}
export default Countries;
