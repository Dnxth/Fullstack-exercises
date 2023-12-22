import PropTypes from 'prop-types';
import { Person } from './Person';

export const NumberList = ({ persons, search }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </>
  );
};

NumberList.propTypes = {
  persons: PropTypes.array,
  search: PropTypes.string,
};
