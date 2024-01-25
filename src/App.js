import logo from './logo.svg';
import './App.css';
import PropsComponent from './components/functional component/PropertiesComponent';
import PropsComponent1 from './components/functional component/PropertiesComponents1';

function App() {
  return (
    <div className="App">
      <PropsComponent name="Darshu" course="Mern"/>
     
      <header className="App-header">
        <PropsComponent1 location="India" city="Tiruppur"/>
      
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
