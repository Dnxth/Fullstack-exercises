import PropTypes from 'prop-types';

import { deletePerson } from '../services/persons';

export const DeleteBtn = ({ person, setPersons, persons }) => {
  const handleClick = () => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      deletePerson(person.id);
      setPersons(
        persons.filter((personDeleted) => personDeleted.id !== person.id)
      );
    }
  };

  return <button onClick={handleClick}>Delete</button>;
};

DeleteBtn.propTypes = {
  person: PropTypes.object,
  setPersons: PropTypes.func,
  persons: PropTypes.array,
};
