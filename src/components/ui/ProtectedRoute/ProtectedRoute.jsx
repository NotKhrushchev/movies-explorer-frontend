import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../../contexts/userContext';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const {currentUser} = useContext(UserContext);
  return (
    currentUser ? <Component {...props}/> : <Navigate to='/signin'/>
  );
};

export default ProtectedRoute;