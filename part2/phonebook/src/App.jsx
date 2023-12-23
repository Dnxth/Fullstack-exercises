import { useEffect, useState } from 'react';
import axios from 'axios';

import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { NumberList } from './components/NumberList';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3002/persons').then((response) => {
      const { data } = response;
      setPersons(data);
    });
  }, []);

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
