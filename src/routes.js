import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

import { Provider } from "react-redux";
import { store } from "./store/store";
// Import custom components
import Login from "./containers/login";
import Singup from "./containers/singup";
import Dashboard from "./containers/dashborad";
export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene
              initial
              key="login"
              component={Login}
              hideNavBar={true}
              type="replace"
            />
         
            <Scene
              key="singup"
              component={Singup}
              hideNavBar={true}
              type="replace"
            />
         
              <Scene
              // initial
              key="dashboard"
              component={Dashboard}
              hideNavBar={true}
              type="replace"
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}