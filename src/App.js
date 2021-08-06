import './App.css';
import Gods from "./Gods"
import Header from './Header'
import Navbar from './Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import React from 'react';
import Photos from './Photos'
class App extends React.Component {
  render(){
  return (
    <div>
       <BrowserRouter>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={Header}/>
       <Route exact path="/Photos" component={Photos}/>
       <Route exact path="/Gods" component={Gods}/>
       </Switch>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
