/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

export default function Calculator() {
  const elements = {
    total: 0,
    next: null,
    operation: null,
  };
  const [status, setStatus] = useState(elements);
  const clickHandler = (e) => {
    setStatus({ ...status, ...calculate(status, e.target.innerText) });
  };

  return (
    <div className="wrapper">
      <div className="result" data-testid="result" role="result">
        {status.total}
        {' '}
        {status.operation}
        {' '}
        {status.next}
      </div>
      <button data-testid="AC" type="button" onClick={clickHandler} className="greyBtn">AC</button>
      <button data-testid="+/-" type="button" onClick={clickHandler} className="greyBtn">+/-</button>
      <button type="button" onClick={clickHandler} className="greyBtn">%</button>
      <button type="button" onClick={clickHandler} className="orangeBtn">÷</button>

      <button type="button" onClick={clickHandler} className="greyBtn">7</button>
      <button type="button" onClick={clickHandler} className="greyBtn">8</button>
      <button data-testid="9" type="button" onClick={clickHandler} className="greyBtn">9</button>
      <button type="button" onClick={clickHandler} className="orangeBtn">x</button>

      <button type="button" onClick={clickHandler} className="greyBtn">4</button>
      <button type="button" onClick={clickHandler} className="greyBtn">5</button>
      <button type="button" onClick={clickHandler} className="greyBtn">6</button>
      <button data-testid="-" type="button" onClick={clickHandler} className="orangeBtn">-</button>

      <button type="button" onClick={clickHandler} className="greyBtn">1</button>
      <button data-testid="2" type="button" onClick={clickHandler} className="greyBtn">2</button>
      <button type="button" onClick={clickHandler} className="greyBtn">3</button>
      <button type="button" onClick={clickHandler} className="orangeBtn">+</button>

      <button type="button" onClick={clickHandler} className="greyBtn zero">0</button>
      <button type="button" onClick={clickHandler} className="greyBtn">.</button>
      <button data-testid="=" type="button" onClick={clickHandler} className="orangeBtn">=</button>

    </div>

  );
}
