import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../..';

export default connect(mapStateToProps)(function index (props) {
  const { count, dispatch } = props;
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
});

function mapStateToProps (state) {
  return state;
}
