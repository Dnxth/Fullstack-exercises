import PropTypes from 'prop-types';

export const Searcher = ({ search, setSearch, allCountries, setCountries }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);

    const countriesFiltered = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    setCountries(countriesFiltered);
  };

  return (
    <div>
      Find countries:{' '}
      <input type="text" onChange={handleChange} value={search} />
    </div>
  );
};

Searcher.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  allCountries: PropTypes.array,
  setCountries: PropTypes.func,
};
