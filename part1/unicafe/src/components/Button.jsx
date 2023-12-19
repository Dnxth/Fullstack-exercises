import PropTypes from 'prop-types';

export const Button = ({ handle, text }) => {
  return <button onClick={handle}>{text}</button>;
};

Button.propTypes = {
  handle: PropTypes.func,
  text: PropTypes.string,
};
