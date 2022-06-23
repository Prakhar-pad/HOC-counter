import React from 'react';
import customHOC from './customHOC';

const ClickCounter = (props) => {
  console.log(props);
  return (
    <button onClick={props.incrementCounter}>
      {props.text + ' ' + props.count}
    </button>
  );
};
export default customHOC(ClickCounter);
