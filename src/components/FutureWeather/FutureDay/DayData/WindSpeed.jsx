function WindSpeed(props) {
  const { speed } = props;
  return (
    <li>
      <p>{speed}</p>km/h
    </li>
  );
}

export default WindSpeed;
