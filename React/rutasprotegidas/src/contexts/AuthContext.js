import { useContext, createContext, useState, useCallback, useMemo } from "react";

const AuthContext = createContext({

    login:() => {},
    logout:() => {},
    isAuthenticated: false

});

const MY_AUTH_APP = "MY_AUTH_APP";

export default function AuthContextProvider({ children }){

    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? false);

    const login = useCallback(function(){
        window.localStorage.setItem(MY_AUTH_APP, true);
        // Aquí en lugar de true, podríamos guardar el token que nos viene desde Node
        setIsAuthenticated(true);
    }, [])

    const logout = useCallback(function(){
        window.localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false);
    }, [])

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated
        }), 
        [login, logout, isAuthenticated]
    );

    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>

}

export function useAuthContext(){
    return useContext(AuthContext);
}