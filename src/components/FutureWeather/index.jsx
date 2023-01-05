import { Component } from 'react';
import FutureDay, { ParamNames } from './FutureDay';
import styles from './style.module.css';
//usersData.map((u) => ({ ...u, isSelected: false })),
class FutureWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [],
    };
  }

  dataTransform = (data) => {
    const transData = [];

    data.time.forEach(() => {
      transData.push({});
    });

    for (const info in data) {
      data[info].forEach((e, i) => {
        transData[i][info] = e;
      });
    }

    return transData;
  };

  getData = () => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=47.85&longitude=35.12&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin&start_date=2023-01-06&end_date=2023-01-08'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ weather: this.dataTransform(data.daily) });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  componentDidMount() {
    this.getData();
    setInterval(this.getData, 60000);
  }

  mapUser = (u) => {
    return (
      <FutureDay
        key={u.time}
        temp_max={u.temperature_2m_max}
        temp_min={u.temperature_2m_min}
        time={u.time}
        wind_dir={u.winddirection_10m_dominant}
        wind_speed={u.windspeed_10m_max}
      />
    );
  };

  render() {
    const { weather } = this.state;

    return (
      <section className={styles.futureWeather}>
        <h1 className={styles.title}>Weather for next 3 days</h1>
        <ParamNames />
        <ul className={styles.dayList}>{weather.map(this.mapUser)}</ul>
      </section>
    );
  }
}

export default FutureWeather;
