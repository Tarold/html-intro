import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000' });

export const getUsers = () => httpClient.get('/api/users?limit=100&offset=0');

// if js-object => Content-Type: Application/json
//    data => req.body
// if FormData => Content-Type: multipart/form-data
//    data (text) => (multer) => req.body
//    data (file) => (multer) => req.file
export const createUser = data => httpClient.post('/api/users', data);

export const deleteUser = userId => httpClient.delete(`/api/users/${userId}`);

const httpClient1 = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/',
});

export const getTodoses = userId =>
  httpClient.get(`/api/users/${userId}/tasks`);

export const createNewTodos = values => httpClient1.post('/contacts', values);

export const updateTodos = (id, values) =>
  httpClient1.patch(`/contacts/${id}`, values);

export const deleteTodos = id => httpClient1.delete(`/contacts/${id}`);
