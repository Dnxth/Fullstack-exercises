import axios from 'axios';

const baseUrl = '/api/persons';

export const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export const addPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then((response) => response.data);
};

export const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export const editPerson = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then((response) => response.data);
};
