import PropTypes from 'prop-types';
import styles from './style.module.sass';

const WEEK_DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

function SelectedSection({ selected }) {
  return (
    <div className={styles.selectedSection}>
      <h2 className={styles.sectionName}>{WEEK_DAYS[selected.getDay()]}</h2>
      <span className={styles.selectedDate}>{selected.getDate()}</span>
    </div>
  );
}

SelectedSection.propTypes = {
  selected: PropTypes.instanceOf(Date),
};

export default SelectedSection;
