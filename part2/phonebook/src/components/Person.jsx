import PropTypes from 'prop-types';

export const Person = ({ person }) => {
  return (
    <p>
      {person.name} {person.number}
    </p>
  );
};

Person.propTypes = {
  person: PropTypes.object,
};
