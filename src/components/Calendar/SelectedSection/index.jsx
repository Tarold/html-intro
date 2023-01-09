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
      {WEEK_DAYS[selected.getDay()]}
      {selected.getDate()}
    </div>
  );
}

SelectedSection.propTypes = {
  selected: PropTypes.instanceOf(Date),
};

export default SelectedSection;
