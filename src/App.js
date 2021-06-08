import logo from './logo.svg';
import './App.css';//Import de style globaux
import Header from './Header/header';

function App() {
  const texte = "Hello cda-1 2021";
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
        {texte.toUpperCase()}
        </p>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div> 
  );
}

export default App;
