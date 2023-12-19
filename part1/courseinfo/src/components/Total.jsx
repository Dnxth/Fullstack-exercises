import PropTypes from 'prop-types';

export const Total = ({ course }) => {
  return (
    <p>
      Number of exercises{' '}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
    </p>
  );
};

Total.propTypes = {
  course: PropTypes.object,
};