import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function Hello() {
  const [value, setValue] = useState(0);

  function handleAddition() {
    setValue((prevState) => prevState + 1);
  }

  function handleSubtraction() {
    setValue((prevState) => prevState - 1);
  }

  return (
    <div>
      <h1 className={value > 5 ? 'green' : 'blue'}>{value}</h1>
      {/* eslint-disable-next-line react/button-has-type */}
      <button id="add" onClick={handleAddition}>
        +
      </button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button id="subtract" onClick={handleSubtraction}>
        -
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
