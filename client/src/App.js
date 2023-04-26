import './App.css';
//import UserPage from './pages/UserPage';
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
  return <Task />;
}

export default App;
