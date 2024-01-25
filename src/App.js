import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/functional component/PropertiesComponent';

import StateComponent from './components/class component/StateComponent';

function App() {
  return (
    <div className="App">
      <PropsComponent name="Darshu" course="Mern"/>
     
      <header className="App-header">
        
        <StateComponent/>
        
      
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
