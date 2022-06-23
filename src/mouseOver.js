import React from 'react';
import customHOC from './customHOC';

const MouseOverCounter = (props) => {
  return (
    <button onMouseOver={props.incrementCounter}>
      {' '}
      {props.text + ' ' + props.count}
    </button>
  );
};
export default customHOC(MouseOverCounter);
