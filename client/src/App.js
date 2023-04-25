import './App.css';
//import UserPage from './pages/UserPage';
import Todo from './pages/TodoPage';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faCheck,
  faXmark,
  faPencil,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faXmark, faPencil, faTrash);

function App () {
  return <Todo />;
}

export default App;
