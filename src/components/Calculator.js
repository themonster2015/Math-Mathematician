import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

   handleClick = (e) => {
     // eslint-disable-next-line react/no-access-state-in-setstate
     this.setState(calculate(this.state, e.target.innerText));
   }

   render() {
     const { total, next, operation } = this.state;
     console.log(this.state);
     return (
       <div className="wrapper">
         <div className="result">
           {(total === null) ? 0 : total}
           {' '}
           {operation}
           {' '}
           {next}
         </div>
         <button type="button" onClick={this.handleClick} className="greyBtn">AC</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">+/-</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">%</button>
         <button type="button" onClick={this.handleClick} className="orangeBtn">:</button>

         <button type="button" onClick={this.handleClick} className="greyBtn">7</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">8</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">9</button>
         <button type="button" onClick={this.handleClick} className="orangeBtn">x</button>

         <button type="button" onClick={this.handleClick} className="greyBtn">4</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">5</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">6</button>
         <button type="button" onClick={this.handleClick} className="orangeBtn">-</button>

         <button type="button" onClick={this.handleClick} className="greyBtn">1</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">2</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">3</button>
         <button type="button" onClick={this.handleClick} className="orangeBtn">+</button>

         <button type="button" onClick={this.handleClick} className="greyBtn zero">0</button>
         <button type="button" onClick={this.handleClick} className="greyBtn">.</button>
         <button type="button" onClick={this.handleClick} className="orangeBtn">=</button>

       </div>

     );
   }
}

export default Calculator;
