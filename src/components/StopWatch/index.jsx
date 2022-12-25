import { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    this.stop();
  }

  tick = () => {
    const newCount = new Date(this.state.count.valueOf());

    newCount.setSeconds(newCount.getSeconds() + 1);
    this.setState({ count: newCount });
  };

  start = () => {
    if (!this.id) {
      this.id = setInterval(this.tick, 1000);
    }
  };

  stop = () => {
    clearInterval(this.id);
    this.id = null;
  };

  reset = () => {
    this.setState({ count: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  render() {
    const { count } = this.state;

    return (
      <article>
        <div>{count.toLocaleTimeString('en-GB')}</div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
