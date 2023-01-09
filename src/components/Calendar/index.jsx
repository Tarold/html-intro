import { Component } from 'react';
import MonthSection from './MonthSection';
import SelectedSection from './SelectedSection';
import style from './style.module.sass';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
    };
  }

  selectDate = (selected) => {
    this.setState({
      selectedDate: selected,
    });
  };

  render() {
    return (
      <div className={style.calendar}>
        <SelectedSection selected={this.state.selectedDate} />
        <MonthSection
          selectDate={(select) => {
            this.selectDate(select);
          }}
        />
      </div>
    );
  }
}

export default Calendar;
