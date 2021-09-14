import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="wrapper">
        <div className="result">{result}</div>
        <button type="button" className="greyBtn">AC</button>
        <button type="button" className="greyBtn">+/-</button>
        <button type="button" className="greyBtn">%</button>
        <button type="button" className="orangeBtn">:</button>

        <button type="button" className="greyBtn">7</button>
        <button type="button" className="greyBtn">8</button>
        <button type="button" className="greyBtn">9</button>
        <button type="button" className="orangeBtn">x</button>

        <button type="button" className="greyBtn">4</button>
        <button type="button" className="greyBtn">5</button>
        <button type="button" className="greyBtn">6</button>
        <button type="button" className="orangeBtn">-</button>

        <button type="button" className="greyBtn">1</button>
        <button type="button" className="greyBtn">2</button>
        <button type="button" className="greyBtn">3</button>
        <button type="button" className="orangeBtn">+</button>

        <button type="button" className="greyBtn zero">0</button>
        <button type="button" className="greyBtn">.</button>
        <button type="button" className="orangeBtn">=</button>

      </div>

    );
  }
}

export default Calculator;
