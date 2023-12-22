import { useState } from 'react';

import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { NumberList } from './components/NumberList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

  const [search, setSearch] = useState('');

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <NumberList persons={persons} search={search} />
    </div>
  );
};

export default App;
