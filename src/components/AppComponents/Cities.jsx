import classes from './Cities.module.css';
import { useCities } from '../../contexts/CitiesContext';
import CityItem from './CityItem';
import Spinner from './Spinner';
import Message from './Message';

function Cities() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on a city on the map" />;

  return (
    <ul className={classes.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}
export default Cities;
