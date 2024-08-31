import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval() can be dangerous in production code
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="app">
      <div className="calculator-card">
        <h1>Calculator</h1>
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">Result: {result}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;