import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

  changeStep = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <input type="number" value={step} onChange={this.changeStep} />
        <Counter step={step} />
      </>
    );
  }
}

export default App;
