import styles from './style.module.css';
import Temperature from './DayData/Temperature.jsx';
import WindDir from './DayData/WindDir.jsx';
import WindSpeed from './DayData/WindSpeed.jsx';

function FutureDay(props) {
  const { temp_max, temp_min, time, wind_dir, wind_speed } = props;

  return (
    <li className={styles.day}>
      <h2 className={styles.dayTitle}>{time}</h2>
      <ul className={styles.dataList}>
        <Temperature temp={temp_max} />
        <Temperature temp={temp_min} />
        <WindDir dir={wind_dir} />
        <WindSpeed speed={wind_speed} />
      </ul>
    </li>
  );
}

export function ParamNames() {
  return (
    <li className={styles.dataNames}>
      <h2 className={styles.dayTitle}>Date:</h2>
      <ul className={styles.dataList}>
        <li title="Minimum temperature">MinTemp:</li>
        <li title="Maximum temperature">MaxTemp:</li>
        <li title="Prevailing wind direction">WindDir:</li>
        <li title="Average wind speed">WindSpeed:</li>
      </ul>
    </li>
  );
}

export default FutureDay;
