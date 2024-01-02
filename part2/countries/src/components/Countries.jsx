import PropTypes from 'prop-types';

import { Country } from './Country';

export const Countries = ({ countries, search }) => {
  if (search !== '' && countries.length > 10) {
    return <p>Too many matches, specify your search.</p>;
  } else if (
    (countries.length > 1 && countries.length < 10) ||
    countries.length === 0
  ) {
    return (
      <ul>
        {countries.map((country, i) => (
          <li key={i}>{country.name.common}</li>
        ))}
      </ul>
    );
  } else {
    return <Country country={countries[0]} />;
  }
};

Countries.propTypes = {
  countries: PropTypes.array,
  search: PropTypes.string,
};
