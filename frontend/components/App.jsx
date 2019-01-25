import React from 'react';
import HeaderComponent from '../components/header/header_component';
import LoginComponent from '../components/header/login_component';
import SignupComponent from '../components/header/signup_component';
import SplashComponent from '../components/splash/splash_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <HeaderComponent />
    
    <ProtectedRoute path='/' component={SplashComponent} />
    <AuthRoute path='/login' component={LoginComponent} />
    <AuthRoute path='/signup' component={SignupComponent} />
    
  </div>
);

export default App;