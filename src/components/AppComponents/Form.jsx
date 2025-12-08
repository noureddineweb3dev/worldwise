import { useEffect, useState } from 'react';
import { useUrlLocation } from '../../hooks/useUrlLocation';
import { useCities } from '../../contexts/CitiesContext';
import classes from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import BackButton from './BackButton';
import Button from './Button';
import Message from './Message';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [lat, lng] = useUrlLocation();
  const { fetchData: fetchCityGeocoding, addCity, isLoading } = useCities();
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    cityName: '',
    date: '',
    notes: '',
  });
  const [choosedCityInfo, setChoosedCityInfo] = useState({});
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

  async function handleSubmit(e) {
    e.preventDefault();
    const newCity = {
      cityName: formInputs.cityName,
      country: choosedCityInfo.countryName,
      emoji: choosedCityInfo.countryCode,
      date: formInputs.date,
      notes: formInputs.notes,
      position: { lat, lng },
    };
    addCity(newCity);
    navigate('/app/cities');
  }

  if (choosedCityInfo.city === '' && choosedCityInfo.countryName === '') {
    return <Message message="That area doesn't seem to be city. Click elsewhere! " />;
  }

  return (
    <form className={`${classes.form} ${isLoading ? classes.loading : ''}`} onSubmit={handleSubmit}>
      <div className={classes.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" value={formInputs.cityName} />
      </div>

      <div className={classes.row}>
        <label htmlFor="date">When did you go to ?</label>
        <DatePicker
          id="date"
          onChange={(date) => setFormInputs({ ...formInputs, date: date })}
          selected={formInputs.date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={classes.row}>
        <label htmlFor="notes">Notes about your trip to </label>
        <textarea
          id="notes"
          value={formInputs.notes}
          onChange={(e) => setFormInputs({ ...formInputs, notes: e.target.value })}
        />
      </div>

      <div className={classes.buttons}>
        <Button btnType="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}
export default Form;
