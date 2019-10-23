import React, {Component} from 'react';
import AppNavbar from "./components/appNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ShoppingList from "./components/shoppingList"

import {Provider} from "react-redux";
import store from "./store";

class App extends Component{
  render(){
    return(
      <Provider store = {store}>
      <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
    </Provider>
    );
  }
}


export default App;
