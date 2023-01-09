import PropTypes from 'prop-types';
import { Component } from 'react';
import MonthTable from './MonthTable';
import {
  setDate,
  getDate,
  getDay,
  startOfMonth,
  endOfMonth,
  getMonth,
  getYear,
} from 'date-fns';
import styles from './style.module.sass';

const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class MonthSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: new Date(),
      date: new Date(),
    };

    this.selectDate = props.selectDate;
  }

  clickDay = (e) => {
    const selectedDate = Number(e.target.getAttribute('data-day'));

    const selected = setDate(new Date(), selectedDate);
    this.setState({ selected });
    this.selectDate(selected);
  };

  render() {
    let { date, selected } = this.state;

    const whiteSpacesStart = getDay(startOfMonth(date));
    const whiteSpacesEnd = 6 - getDay(endOfMonth(date));

    const countDays = getDate(endOfMonth(date));
    const selectedDay = getDate(selected);

    const month = getMonth(date);
    const year = getYear(date);

    return (
      <div>
        <span className={styles.sectionName}>
          {MONTH[month]} {year}
        </span>
        <MonthTable
          whiteSpacesStart={whiteSpacesStart}
          whiteSpacesEnd={whiteSpacesEnd}
          countDays={countDays}
          selected={selectedDay}
          clickDay={this.clickDay}
        />
      </div>
    );
  }
}

MonthSection.propTypes = {
  selectDate: PropTypes.func,
};

export default MonthSection;
