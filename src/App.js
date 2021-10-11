import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* // logo */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* // message */}
        <p>
          Attaporn  Peungsook
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>

        {/* // link */}
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
