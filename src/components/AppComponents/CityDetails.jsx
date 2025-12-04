import { useParams } from 'react-router-dom';
import classes from './CityDetails.module.css';
function CityDetails() {
  const { id } = useParams();
  return <h1 className={classes.test}>CityDetails for city with id {id} </h1>;
}
export default CityDetails;
