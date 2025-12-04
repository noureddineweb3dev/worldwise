import { createContext, useContext, useState, useEffect } from 'react';

const CitiesContext = createContext();

const BASE_URL = 'http://localhost:8000/cities';
const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function CitiesProvider({ children }) {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  async function fetchData(URL, stateUpdater, id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}${id ? `/${id}` : ''}`);
      const data = await res.json();
      stateUpdater(data);
    } catch {
      alert('error during fetching data...');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchData(`${BASE_URL}`, setCities);
  }, []);

  return (
    <CitiesContext.Provider
      value={{ BASE_URL, cities, isLoading, currentCity, setCurrentCity, fetchData, formatDate }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
