import PropTypes from 'prop-types';

export const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string,
  value: PropTypes.any,
};
