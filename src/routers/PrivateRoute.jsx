import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser,loading } = useAuth();
    if(loading){
        return <div>Loading....</div>
    }
    if (!currentUser) {
        alert("You must be logged in to access the checkOut page.");
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;
