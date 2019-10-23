import React, {Component} from 'react';
import AppNavbar from "./components/appNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ShoppingList from "./components/shoppingList"

class App extends Component{
  render(){
    return(
      <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
    );
  }
}


export default App;
