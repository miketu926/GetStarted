import React from 'react';
import HeaderComponent from '../components/header/header_component';
import LoginComponent from '../components/header/login_component';
import SignupComponent from '../components/header/signup_component';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <HeaderComponent />
    <AuthRoute path='/login' component={LoginComponent} />
    <AuthRoute path='/signup' component={SignupComponent} />
  </div>
);

export default App;