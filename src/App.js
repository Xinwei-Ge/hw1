// import logo from './logo.svg';
import './App.css';
import logo from './me.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is David and I'm going to master React! 
        </p>
        <p>
         🚀 GameStop to the moon 🌙
        </p>
        <a
          className="App-link"
          href="https://github.com/Xinwei-Ge"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github!
        </a>
      </header>
    </div>
  );
}

export default App;
