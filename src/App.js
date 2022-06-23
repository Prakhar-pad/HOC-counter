import React from 'react';
import './style.css';
import ClickCounter from './clickCounter';
import MouseOverCounter from './mouseOver';
export default function App() {
  const clickCounter = 'Click';
  const mouseOver = 'MouseOver';
  return (
    <div>
      <ClickCounter text={clickCounter} />
      <hr />
      <MouseOverCounter text={mouseOver} />
    </div>
  );
}
