import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, component: Component, authenticated }) => {
  return (
    <Route
      path={path}
      element={authenticated ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
