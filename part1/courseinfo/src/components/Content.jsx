import PropTypes from 'prop-types';
import { Part } from './Part';

export const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  );
};

Content.propTypes = {
  course: PropTypes.object,
};
