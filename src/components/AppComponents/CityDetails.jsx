import classes from './CityDetails.module.css';
import { useParams } from 'react-router-dom';
import { useCities } from '../../contexts/CitiesContext';
import { useEffect } from 'react';
import BackButton from './BackButton';
import { countryCodeToFlag, getFlagSrc } from '../../utils/flags';
import Spinner from './Spinner';

function CityDetails() {
  const { id } = useParams();
  const { fetchData, currentCity, setCurrentCity, BASE_URL, formatDate, isLoading } = useCities();
  const { cityName, emoji, date, notes } = currentCity;

  useEffect(() => {
    fetchData(BASE_URL, setCurrentCity, id);
  }, [id]);

  if (isLoading) return <Spinner />;

  return (
    <div className={classes.city}>
      <div className={classes.row}>
        <h6>City name</h6>
        <h3>
          <span>
            {getFlagSrc(emoji) ? (
              <img src={getFlagSrc(emoji)} alt={`${cityName} flag`} width="24" height="18" />
            ) : (
              countryCodeToFlag(emoji) || emoji
            )}
          </span>{' '}
          {cityName}
        </h3>
      </div>

      <div className={classes.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={classes.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={classes.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`} target="_blank" rel="noreferrer">
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}
export default CityDetails;
