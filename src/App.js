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
// import Content from './components/functional component/Content';
import Signin from './components/functional component/Signin';
import Login from './components/functional component/Login';
import Reference from './components/functional component/Reference';
import Memo from './components/functional component/Memo';
import Callback from './components/functional component/Callback';
import Map from './components/functional component/Map';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Experience" element={<Experience/>}></Route>
        <Route path="/Signin"element={<Signin/>}></Route>
        <Route path="/Login"element={<Login/>}></Route>
        <Route path="/Reference"element={<Reference/>}></Route>
        <Route path="/Memo"element={<Memo/>}></Route>
        <Route path="/Callback"element={<Callback/>}></Route>
        <Route path="/Map"element={<Map/>}></Route>
        </Routes>
        {/* <Content/> */}
        
      </BrowserRouter>
      {/* <PropsComponent name="Darshu" course="Mern"/> */}
      
  

     <BrowserRouter>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
