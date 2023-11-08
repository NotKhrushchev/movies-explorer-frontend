import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const loggedId = localStorage?.jwt;
  return (
    loggedId ? <Component {...props}/> : <Navigate to='/'/>
  );
};

export default ProtectedRoute;