import React from "react";

// router import
import { Scene, Router } from "react-native-router-flux";

// import component
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="Login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => console.log("right")}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightButtonStyle={{ right: 0 }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
