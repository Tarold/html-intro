import PropTypes from 'prop-types';

function THead({ className }) {
  return (
    <thead>
      <tr className={className}>
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
      </tr>
    </thead>
  );
}

THead.propTypes = {
  className: PropTypes.string,
};

export default THead;
