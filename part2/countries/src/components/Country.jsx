import PropTypes from 'prop-types';

import { Weather } from './Weather';

export const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
      <Weather country={country} />
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};
