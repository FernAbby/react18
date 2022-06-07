import logo from './logo.svg';
import './App.css';
import AddCount from './components/Count/AddCount';
import HooksExample from './components/Count/HooksExample/index';

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
      <AddCount />
      <HooksExample />
    </div>
  );
}

export default App;
