import { createContext, useContext, useState, useEffect } from 'react';
import { BASE_URL, fetchJson } from '../utils/api';

const CitiesContext = createContext();
const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  async function fetchData(URL, stateUpdater, id, signal) {
    try {
      setIsLoading(true);
      const data = await fetchJson(`${URL}${id ? `/${id}` : ''}`, { signal });
      stateUpdater(data);
    } catch (err) {
      if (err.name === 'AbortError') return; // request was cancelled
      console.error('fetchData error:', err);
      alert('Error during fetching data. See console for details.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    const ac = new AbortController();
    fetchData(BASE_URL, setCities, undefined, ac.signal);
    return () => ac.abort();
  }, []);

  async function addCity(city) {
    try {
      setIsLoading(true);
      const newCity = await fetchJson(BASE_URL, { method: 'POST', body: city });
      setCities((cities) => [...cities, newCity]);
    } catch (err) {
      console.error('addCity error:', err);
      alert('Error during adding city. See console for details.');
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetchJson(`${BASE_URL}/${id}`, { method: 'DELETE' });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      console.error('deleteCity error:', err);
      alert('Error during deleting city. See console for details.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        BASE_URL,
        cities,
        isLoading,
        currentCity,
        setCurrentCity,
        fetchData,
        formatDate,
        addCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
