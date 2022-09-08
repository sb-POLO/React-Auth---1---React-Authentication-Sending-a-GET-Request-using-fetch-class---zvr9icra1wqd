import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './loginAuth';


const RequireAuth = ({ children }) => {
    const auth = useAuth();


    if (!auth.user) {
        return <Navigate to={'/signin'} />
    }

    return (children);
}

export default RequireAuth;