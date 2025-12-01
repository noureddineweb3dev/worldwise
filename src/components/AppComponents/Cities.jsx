import classes from './Cities.module.css';
import { useCities } from '../../contexts/CitiesContext';
import CityItem from './CityItem';

function Cities() {
  const { cities } = useCities();
  return (
    <ul className={classes.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}
export default Cities;
