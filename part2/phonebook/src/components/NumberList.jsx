import PropTypes from 'prop-types';
import { Person } from './Person';

export const NumberList = ({ persons, search, setPersons }) => {
  return (
    <>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person) => (
          <Person
            key={person.name}
            person={person}
            setPersons={setPersons}
            persons={persons}
          />
        ))}
    </>
  );
};

NumberList.propTypes = {
  persons: PropTypes.array,
  search: PropTypes.string,
  setPersons: PropTypes.func,
};
