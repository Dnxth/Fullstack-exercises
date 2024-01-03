import { useEffect, useState } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';

export const Weather = ({ country }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const params = {
      access_key: import.meta.env.VITE_API_KEY,
      query: country.capital[0],
    };

    axios
      .get('http://api.weatherstack.com/current', { params })
      .then((response) => {
        const { data } = response;
        setWeather(data);
      });
  }, [country]);

  if (weather === undefined) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weather.current.temperature} Celcius</p>
        <img
          src={weather.current.weather_icons[0]}
          alt={weather.current.weather_descriptions[0]}
        />
        <p>
          Wind: {weather.current.wind_speed} mph direction{' '}
          {weather.current.wind_dir}
        </p>
      </>
    );
  }
};

Weather.propTypes = {
  country: PropTypes.object,
};
