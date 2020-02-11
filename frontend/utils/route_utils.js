import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    // debugger
    return{
        //if our state has an id, under the sessions slice, then we are logged in!
    loggedIn: Boolean(state.session.id)
}};


const Auth = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props => ( 
            //if we are logged in,
            // we shouldn't access this component,
            // instead, just go home,
            // where the user profile is
            loggedIn ? <Redirect to="/home" /> : <Component {...props} />
        )} 
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

const Protected = ({loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={
            props => {
             return   loggedIn ? <Component {...props} /> : <Redirect to="/login"/>
            }
        }
    />
);

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));