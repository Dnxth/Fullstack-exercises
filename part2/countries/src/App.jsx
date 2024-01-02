import axios from 'axios';
import { useEffect, useState } from 'react';

import { Searcher } from './components/Searcher';
import { Countries } from './components/Countries';

function App() {
  const [search, setSearch] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const { data } = response;
      setAllCountries(data);
    });
  }, []);

  return (
    <>
      <Searcher
        search={search}
        setSearch={setSearch}
        allCountries={allCountries}
        setCountries={setCountries}
      />
      <Countries countries={countries} search={search} />
    </>
  );
}

export default App;
