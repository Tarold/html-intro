import PropTypes from 'prop-types';
import Day from './Day';

function Week({ week, selected, clickDay, className }) {
  return (
    <tr className={className}>
      {week.map((day, index) => (
        <Day
          key={'' + index + day}
          number={day}
          isSelected={selected === day}
          clickDay={clickDay}
        />
      ))}
    </tr>
  );
}

Week.defaultProps = {
  number: null,
  clickDay: () => {
    console.log('Empty function clickDay in Week/index.jsx');
  },
  selected: 0,
};

Week.propTypes = {
  week: PropTypes.array,
  selected: PropTypes.number,
  clickDay: PropTypes.func,
  className: PropTypes.string,
};

export default Week;
