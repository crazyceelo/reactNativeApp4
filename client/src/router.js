import React from "react";

// router import
import { Scene, Router } from "react-native-router-flux";

// import component
import LoginForm from "./components/LoginForm";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Login" component={LoginForm} title="Please Login" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
