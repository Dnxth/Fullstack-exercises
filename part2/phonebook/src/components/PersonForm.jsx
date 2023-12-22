import { useState } from 'react';
import PropTypes from 'prop-types';

export const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangeText = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNum = (e) => {
    setNewNumber(e.target.value);
  };

  const handleClick = () => {
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    persons.some((person) => person.name === newPerson.name)
      ? alert(`${newPerson.name} is already added to phonebook`)
      : setPersons([...persons, newPerson]);

    setNewName('');
    setNewNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" onChange={handleChangeText} value={newName} />
      </div>
      <div>
        number:{' '}
        <input type="text" onChange={handleChangeNum} value={newNumber} />
      </div>
      <div>
        <button onClick={handleClick}>add</button>
      </div>
    </form>
  );
};

PersonForm.propTypes = {
  persons: PropTypes.array,
  setPersons: PropTypes.func,
};
