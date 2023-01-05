import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';

function Temperature(props) {
  const { temp } = props;
  const img = temp > 0 ? <FaTemperatureHigh /> : <FaTemperatureLow />;

  return (
    <li>
      <p>{temp}</p>
      {img}
    </li>
  );
}

export default Temperature;
