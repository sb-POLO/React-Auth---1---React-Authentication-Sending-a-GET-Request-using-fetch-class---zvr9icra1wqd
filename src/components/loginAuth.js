import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Authenticate user
    const authenticateUser = (statusCode, user) => {
        if (statusCode === 200) {
            setUser(user);
            return true;
        }
        return false;
    }

    // Logout
    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                logout,
                authenticateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}