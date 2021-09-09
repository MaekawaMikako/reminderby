import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/color.css';
import { Button } from './component/shared/Button';

function App() {
  return (
    <div className="App">
      <Button size="midium">課題を追加する</Button>
      <Button size="small">みかこ</Button>
      <Button color="secondary">みかこ</Button>
      <Button size="small" color="secondary">
        みかこ
      </Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
