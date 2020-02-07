import React from 'react';
import { Route } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from '../utils/route_utils';
import BannerContainer from './banner_container.js';

const App = () => {
    return (
        <div>
            <header>
                <h1>Hello World!</h1>
            </header>
            <AuthRoute exact path="/" component={BannerContainer} />
        </div>
    );
};

export default App;