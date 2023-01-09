import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.sass';

function Day({ number, clickDay, isSelected }) {
  const classDay = classNames(styles.day, { [styles.selected]: isSelected });
  const onClickFunc = number !== null ? clickDay : Day.defaultProps.clickDay;
  return (
    <th className={classDay} onClick={onClickFunc} data-day={number}>
      {number}
    </th>
  );
}

Day.defaultProps = {
  number: null,
  clickDay: () => {
    console.log('it is not a day of this month');
  },
  isSelected: false,
};

Day.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default Day;
