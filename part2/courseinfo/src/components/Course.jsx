import PropTypes from 'prop-types';

import { Header } from './Header';
import { Content } from './Content';

export const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};
