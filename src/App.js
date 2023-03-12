import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route  exact path ="/login" element= {<Login/>}/>
        </Routes>
        

        <Header/>
        <Routes>
         <Route path="/checkout" element={<Checkout/>} />
         <Route  path="/" element={<Home/>}/>
        </Routes>


      </Router>
    </div>
  );
}

export default App;
