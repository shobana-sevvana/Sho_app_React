import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Component/homepage-component';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Directory from './Directories/Dir.component';
import Hats from './Pages/HatsPage';


function App() {
  return (
    
    <div> Hello this is from Routes
 
        <switch>
          <Route exact path='/' component={HomePage}></Route>
         <Route path='/Hats' component={Hats}></Route>
         {/* <Route path='/menu-items' component={Menuitems}></Route>
          <Route path='/Directory' component={Directory}></Route>*/}
        </switch>
       
    </div>
  );
}

export default App;
