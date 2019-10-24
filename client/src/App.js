import React, {Component} from 'react';
import AppNavbar from "./components/appNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import GPSLocations from "./components/GPSLocations";
import ItemModal from "./components/itemModal";
import {Container} from "reactstrap";

import {Provider} from "react-redux";
import store from "./store";
import {loadUser} from "./actions/authActions";

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal />
          <GPSLocations />
          </Container>
        </div>
      </Provider>
    );
  }
}


export default App;
