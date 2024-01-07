const express = require('express');
const app = express();

const persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
  {
    name: 'Daniel',
    number: '123',
    id: 5,
  },
  {
    name: 'Juan',
    number: '123',
    id: 6,
  },
  {
    name: 'Pedro',
    number: '123',
    id: 7,
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

const PORT = 3000;

app.listen(PORT);
console.log(`Server running on port ${PORT}`);