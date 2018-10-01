import React from "react";

// router import
import { Scene, Router } from "react-native-router-flux";

// import component
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Login" component={LoginForm} title="Please Login" initial />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
