import React from 'react';
import Slider from './components/Slider';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPause,
  faPlay,
  faMaximize,
  faMinimize,
} from '@fortawesome/free-solid-svg-icons';

library.add(faPause, faPlay, faMaximize, faMinimize);

export default function App() {
  return <Slider />;
}
