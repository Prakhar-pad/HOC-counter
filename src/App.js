import React from 'react';
import './style.css';
import ClickCounter from './clickCounter';
import MouseOverCounter from './mouseOver';
export default function App() {
  const t = 'Hello';
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <ClickCounter text={t} />
      <MouseOverCounter />
    </div>
  );
}
