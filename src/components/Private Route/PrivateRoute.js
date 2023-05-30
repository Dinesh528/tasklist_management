import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const authState = useSelector(state => state.auth);
    const { loggedIn, user, error } = authState;
console.log(loggedIn);
  if (!loggedIn) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="login" />
}

// authorized so return outlet for child routes
return <Outlet />;
};

export default PrivateRoute;
