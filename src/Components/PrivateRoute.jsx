import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, path }) => {
    const user = useSelector(({ user }) => user);
    return (
        <Route path={path} render={({ location }) => {
            return user ? children : <Redirect to={{ pathname: '/login', state: { location } }} />
        }} />
    )
}

export default PrivateRoute
