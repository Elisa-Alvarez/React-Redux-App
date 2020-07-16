import React from 'react';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Journal from './components/Journal'
import { Route,Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <Route exact path="/" component={Home}/>
         <Route path="/journal" component={Journal}/>
             <Link to='/journal'>
             <button>Write your own History</button>
             </Link>
         
      
    </div>
  );
}

export default App;
