import { useEffect, useState } from 'react';

import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { NumberList } from './components/NumberList';
import { getAllPersons } from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllPersons().then((persons) => {
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <NumberList persons={persons} search={search} setPersons={setPersons} />
    </div>
  );
};

export default App;
