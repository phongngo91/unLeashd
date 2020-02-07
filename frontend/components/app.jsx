import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomeContainer from './home/home_container';
import SplashContainer from './splash/spash_container';

const App = () => {
    return (
        <div>
            <header>
                <h1>Hello World!</h1>
            </header>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute path="/home" component={HomeContainer} />
        </div>
    );
};

export default App;