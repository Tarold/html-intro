import React, { useEffect, useState } from 'react';

function ClickerCounter() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // після кожного рендеру = componentDidMount + componentDidUpdate
    document.title = clickCount;
  }, [clickCount]);

  const handleClick = () => {
    setClickCount((clickCount) => clickCount + 1);
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClick);

    // скидання ефекту
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return <div>{clickCount}</div>;
}

export default ClickerCounter;

// useEffect(() => {
//   Ефект після кожного рендера (componentDidMount + componentDidUpdate)
//   return () => {
//     Скидання ефекту перед наступним рендером або перед розмонтуванням (~ componentWillUnmount)
//   }
// }, [перелік залежностей])

// Якщо [перелік залежностей] - порожній, то componentDidMount+componentWillUnmount

// - Ефекти без скидання:
//   - підвантаження даних
//   - логування
//   - звернення до DOM
// - Ефекти зі скиданням:
//   - навішування/відписка від обробників подій
//   - таймаути/інтервали

// -------------------------------------------------------------------------------------
// handleClick = () => {this.setState({clickCount:this.state.clickCount+1})}

// componentDidMount() {
//   document.body.addEventListener('click', handleClick )
//   document.title = this.state.clickCount
// }

// componentDidUpdate() {
//   document.title = this.state.clickCount
// }

// componentWillUnmount() { document.body.removeEventListener('click', handleClick )}
