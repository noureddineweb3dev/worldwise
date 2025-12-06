import BackButton from './BackButton';
import Button from './Button';
import classes from './Form.module.css';
import { useEffect, useState } from 'react';
import { useUrlLocation } from '../../hooks/useUrlLocation';
import { useCities } from '../../contexts/CitiesContext';

function Form() {
  const [lat, lng] = useUrlLocation();
  const [formInputs, setFormInputs] = useState({
    cityName: '',
    date: '',
    notes: '',
  });
  const [choosedCityInfo, setChoosedCityInfo] = useState(null);
  const { fetchData: fetchCityGeocoding } = useCities();
  const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;

  useEffect(() => {
    fetchCityGeocoding(BASE_URL, setChoosedCityInfo);
  }, [lat, lng]);

  useEffect(() => {
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      cityName: choosedCityInfo ? choosedCityInfo.city : '',
    }));
  }, [choosedCityInfo]);

  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" value={formInputs.cityName} />
      </div>

      <div className={classes.row}>
        <label htmlFor="date">When did you go to ?</label>
        <input id="date" value={formInputs.date} />
      </div>

      <div className={classes.row}>
        <label htmlFor="notes">Notes about your trip to </label>
        <textarea id="notes" value={formInputs.notes} />
      </div>

      <div className={classes.buttons}>
        <Button btnType="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}
export default Form;
