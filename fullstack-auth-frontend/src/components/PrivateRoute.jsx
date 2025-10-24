import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    // User is not logged in
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
