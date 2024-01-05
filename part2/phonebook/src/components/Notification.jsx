import PropTypes from 'prop-types';

const styles = {
  error: {
    color: 'red',
    background: 'lightgrey',
    border: '3px solid red',
    borderRadius: '5px',
    padding: 10,
    marginBottom: 30,
  },
  success: {
    color: 'green',
    background: 'lightgrey',
    border: '3px solid green',
    borderRadius: '5px',
    padding: 10,
    marginBottom: 30,
  },
};

export const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else if (message.includes('removed')) {
    return <div style={styles.error}>{message}</div>;
  } else {
    return <div style={styles.success}>{message}</div>;
  }
};

Notification.propTypes = {
  message: PropTypes.string,
};
