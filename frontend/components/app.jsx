import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './login_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/spash_container';

const App = () => {
    return (
        <>
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/home" component={HomeContainer} />
        </Switch>
        </>
    );
};

export default App;