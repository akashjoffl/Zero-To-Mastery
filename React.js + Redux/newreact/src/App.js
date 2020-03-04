import React from 'react';
import logo from './logo.svg';
import './App.css';

class Example1 extends React.Component {
  constructor(props) {
    this.customFunction = this.customFunction.bind(this);
  }
}

class Example2 extends React.Component {
  render() {
    return (
      <div>
      <p>Hello World!</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
export default Example1;
export default Example2;