import { Component } from 'react';
import defaultImg from './kitty-cat.jpeg';
import styles from './AnimalSlider.module.css';

class AnimalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: defaultImg,
      caption: 'This is some dog)',
    };
  }

  dogData = ({ message }) => {
    this.setState({ imgSrc: message });
  };

  loadData = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.dogData(data))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.id = setTimeout(this.loadData, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    const { imgSrc, caption } = this.state;
    return (
      <figure className={styles.sliderContainer}>
        <img src={imgSrc} alt="dog" />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  }
}

export default AnimalSlider;
