import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from 'react-native-router-flux';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />
      </Scene>
      <Scene key="main">
        <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Form" />
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
