import PropTypes from 'prop-types';
import Week from './Week';
import styles from './style.module.sass';

function MounthTable({
  selected,
  countDays,
  whiteSpacesStart,
  whiteSpacesEnd,
  clickDay,
}) {
  const spacesStart = new Array(whiteSpacesStart).fill(null);
  const days = Array.from({ length: countDays }, (_, i) => i + 1);
  const spacesEnd = new Array(whiteSpacesEnd).fill(null);

  const dateList = splitToChunks([...spacesStart, ...days, ...spacesEnd], 7);

  return (
    <table className={styles.mounthTable}>
      <thead>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        {dateList.map((week, index) => (
          <Week
            key={'' + week + index}
            week={week}
            index={index}
            selected={selected}
            clickDay={clickDay}
          />
        ))}
      </tbody>
    </table>
  );
}

function splitToChunks(array, parts) {
  const result = array.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / parts);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
}

MounthTable.defaultProps = {
  selected: 0,
  countDays: 30,
  whiteSpacesStart: 0,
  whiteSpacesEnd: 0,
  clickDay: () => {
    console.log('Empty function clickDay in MounthTable/index.jsx');
  },
};

MounthTable.propTypes = {
  selected: PropTypes.number,
  countDays: PropTypes.number,
  whiteSpacesStart: PropTypes.number,
  whiteSpacesEnd: PropTypes.number,
  clickDay: PropTypes.func,
};

export default MounthTable;
