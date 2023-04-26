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

export const getTasks = userId => httpClient.get(`/api/users/${userId}/tasks`);

export const createNewTask = values => httpClient.post('/api/tasks', values);

export const updateTask = (id, values) =>
  httpClient.patch(`/api/tasks/${id}`, values);

export const deleteTask = id => httpClient.delete(`/api/tasks/${id}`);
