import React from 'react';

export default function index({
  nextSlide,
  prevSlide,
  togglePlay,
  toggleFullScreen,
  eventHandler,
  delay,
}) {
  return (
    <div>
      <button onClick={() => prevSlide()}>prevSlide</button>
      <button onClick={() => nextSlide()}>nextSlide</button>
      <button onClick={() => togglePlay()}>togglePlay</button>
      <button onClick={() => toggleFullScreen()}>toggleFullScreen</button>
      <input type="number" onChange={(e) => eventHandler(e)} value={delay} />
    </div>
  );
}
