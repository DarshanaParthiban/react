// import logo from './logo.svg';
import './App.css';
// import PropsComponent from './components/functional component/PropertiesComponent';

// import StateComponent from './components/class component/StateComponent';
import NavBar from './components/functional component/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/functional component/Home';
import About from './components/functional component/About';
import Experience from './components/functional component/experience';

import Footer from './components/functional component/Footer';
import Content from './components/functional component/Content';
import Login from './components/functional component/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Experience" element={<Experience/>}></Route>
        <Route path="/Login" element={<Login/>}></Route></Routes>
        <Content/>
        
      </BrowserRouter>
      {/* <PropsComponent name="Darshu" course="Mern"/> */}
      
  

     <BrowserRouter>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
