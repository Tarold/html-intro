import PropTypes from 'prop-types';

function FlexContainer(props) {
  const { children, jc, ai, fd } = props;

  const flexContainerStyles = {
    display: 'flex',
    justifyContent: jc,
    alignItems: ai,
    flexDirection: fd,
  };

  return <div style={flexContainerStyles}>{children}</div>;
}

FlexContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  jc: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  ai: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  fd: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
};

FlexContainer.defaultProps = {
  jc: 'center',
  ai: 'center',
  fd: 'column',
};

export default FlexContainer;
