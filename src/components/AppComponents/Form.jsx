import { useEffect, useReducer, useState } from 'react';
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
  const { addCity, isLoading } = useCities();
  const navigate = useNavigate();

  const initialState = { cityName: '', date: null, notes: '' };
  function reducer(state, action) {
    switch (action.type) {
      case 'SET_FIELD':
        return { ...state, [action.field]: action.value };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [choosedCityInfo, setChoosedCityInfo] = useState({});
  const [error, setError] = useState(null);

  // Reverse-geocode when we have valid coordinates; cancel previous requests on change
  useEffect(() => {
    if (lat == null || lng == null) return;
    const ac = new AbortController();
    setError(null);
    setChoosedCityInfo({});
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;

    (async () => {
      try {
        const res = await fetch(url, { signal: ac.signal });
        if (!res.ok) {
          const txt = await res.text().catch(() => '');
          throw new Error(`Geocode failed ${res.status}: ${txt}`);
        }
        const data = await res.json();
        // Basic validation: expect city and countryName
        if (!data || (!data.city && !data.locality) || !data.countryName) {
          setChoosedCityInfo({});
        } else {
          setChoosedCityInfo({
            city: data.city || data.locality || '',
            countryName: data.countryName || '',
            countryCode: data.countryCode || '',
          });
          // auto-fill city name for convenience
          dispatch({
            type: 'SET_FIELD',
            field: 'cityName',
            value: data.city || data.locality || '',
          });
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error('Reverse geocode error:', err);
        setError('Could not detect city at this location. Try another spot.');
      }
    })();

    return () => ac.abort();
  }, [lat, lng]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!state.cityName) return setError('Please provide a city name.');
    if (!choosedCityInfo.city || !choosedCityInfo.countryName)
      return setError('Selected location is not a recognized city.');

    const newCity = {
      cityName: state.cityName,
      country: choosedCityInfo.countryName,
      emoji: choosedCityInfo.countryCode,
      date: state.date,
      notes: state.notes,
      position: { lat, lng },
    };

    try {
      await addCity(newCity);
      dispatch({ type: 'RESET' });
      navigate('/app/cities');
    } catch (err) {
      console.error('Add city failed:', err);
      setError('Failed to add city. Try again later.');
    }
  }

  // If user has selected coordinates but reverse geocode didn't return a city
  if (lat != null && lng != null && !choosedCityInfo.city) {
    return <Message message="That area doesn't seem to be a city. Click elsewhere!" />;
  }

  return (
    <form className={`${classes.form} ${isLoading ? classes.loading : ''}`} onSubmit={handleSubmit}>
      {error && <Message message={error} />}

      <div className={classes.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          value={state.cityName}
          onChange={(e) =>
            dispatch({ type: 'SET_FIELD', field: 'cityName', value: e.target.value })
          }
        />
      </div>

      <div className={classes.row}>
        <label htmlFor="date">
          When did you go to {state.cityName || choosedCityInfo.city || ''}?
        </label>
        <DatePicker
          id="date"
          onChange={(date) => dispatch({ type: 'SET_FIELD', field: 'date', value: date })}
          selected={state.date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={classes.row}>
        <label htmlFor="notes">
          Notes about your trip to {state.cityName || choosedCityInfo.city || ''}
        </label>
        <textarea
          id="notes"
          value={state.notes}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'notes', value: e.target.value })}
        />
      </div>

      <div className={classes.buttons}>
        <Button btnType="primary" disabled={isLoading || !state.cityName}>
          Add
        </Button>
        <BackButton />
      </div>
    </form>
  );
}
export default Form;
