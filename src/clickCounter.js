import React from 'react';
import customHOC from './customHOC';

const ClickCounter = (props) => {
  console.log(props);
  return (
    <button onClick={props.incrementCounter}>
      count= {props.count}
      {props.text}
    </button>
  );
};
export default customHOC(ClickCounter);
