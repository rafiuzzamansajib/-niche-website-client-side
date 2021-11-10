import React, { createContext } from 'react';
import useFribase from '../../hooks/useFribase';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContexts = useFribase();
    return (
        <AuthContext.Provider value={allContexts}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;