import React from 'react';
import Slider from './components/Slider';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPause,
  faPlay,
  faMaximize,
  faMinimize,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(faPause, faPlay, faMaximize, faMinimize, faArrowLeft, faArrowRight);

export default function App() {
  return <Slider />;
}
