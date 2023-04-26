import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import Task from './pages/TaskPage';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCheck,
  faXmark,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faXmark, faPencil, faTrash);

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/:userId' element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
