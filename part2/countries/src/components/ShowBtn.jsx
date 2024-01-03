import PropTypes from 'prop-types';

export const ShowBtn = ({ setCountries, id, countries }) => {
  const handleClick = () => {
    setCountries([countries[id]]);
  };
  return <button onClick={handleClick}>Show</button>;
};

ShowBtn.propTypes = {
  setCountries: PropTypes.func,
  id: PropTypes.number,
  countries: PropTypes.array,
};
