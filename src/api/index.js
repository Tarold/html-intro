import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/',
});

export const getTodoses = () => httpClient.get('/contacts');

export const createNewTodos = values => httpClient.post('/contacts', values);

export const updateTodos = (id, values) =>
  httpClient.patch(`/contacts/${id}`, values);

export const deleteTodos = id => httpClient.delete(`/contacts/${id}`);
