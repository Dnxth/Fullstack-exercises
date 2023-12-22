import PropTypes from 'prop-types';

export const Filter = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      Filter shown with:{' '}
      <input type="text" onChange={handleChange} value={search} />
    </div>
  );
};

Filter.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
