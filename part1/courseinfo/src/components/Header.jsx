import PropTypes from 'prop-types';

export const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

Header.propTypes = {
  course: PropTypes.object,
};
