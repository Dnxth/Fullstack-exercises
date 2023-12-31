const express = require('express');
const app = express();

app.use(express.json());

let persons = [
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

app.get('/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for ${
      persons.length
    } people</p> <p>${new Date()}</p>`
  );
});

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  if (person !== undefined) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((persons) => persons.id !== id);
  response.status(204).end();
});

app.post('/api/persons', (request, response) => {
  const person = request.body;

  if (person.name === undefined) {
    return response.status(400).json({ error: 'Name is required' });
  } else if (person.number === undefined) {
    return response.status(400).json({ error: 'Number is required' });
  } else if (persons.find((guy) => guy.name === person.name)) {
    return response.status(400).json({ error: 'Name must be unique' });
  }

  const newPerson = {
    id: Math.floor(Math.random() * (100 - 10) + 10),
    name: person.name,
    number: person.number,
  };

  persons = [...persons, newPerson];

  response.json(person);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
