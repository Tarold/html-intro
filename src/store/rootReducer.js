import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
});

export default rootReducer;

// {
//    theme:{
//    isLight: true;
//   },
//   counter:{
//     count: 0, step: 1
//   }
// }
