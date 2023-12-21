import PropTypes from 'prop-types';
import { Part } from './Part';
import { Total } from './Total';

export const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}

      <Total parts={course.parts} />
    </div>
  );
};

Content.propTypes = {
  course: PropTypes.object,
};
