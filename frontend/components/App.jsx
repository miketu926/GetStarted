import React from 'react';
import HeaderComponent from '../components/header/header_component';
import LoginComponent from '../components/header/login_component';
import SignupComponent from '../components/header/signup_component';
import SplashComponent from '../components/splash/splash_component';
import ProjectShowComponent from './projects/project_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route, Redirect, Link } from 'react-router-dom';


const App = () => (
  <div>
    <HeaderComponent />
    
    <Switch>
      <AuthRoute path='/login' component={LoginComponent} />
      <AuthRoute path='/signup' component={SignupComponent} />
      <ProtectedRoute path='/projects/:projectId' component={ProjectShowComponent} />
      <ProtectedRoute path='/' component={SplashComponent} />
    </Switch>
    
  </div>
);

export default App;