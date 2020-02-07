import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/spash_container';

const App = () => {
    return (
        <>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/home" component={HomeContainer} />
        </>
    );
};

export default App;