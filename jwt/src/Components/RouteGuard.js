// src/components/RouteGuard.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RouteGuard;
