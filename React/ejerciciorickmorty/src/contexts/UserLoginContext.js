import { createContext, useState, useContext } from "react";

const UserLoginContext = createContext({
    user: {},
    login: () => { }
});

export function UserLoginContextProvider({ children }) {
    
    const [user, setUser] = useState(null);

    function login(user, e) {
        e.preventDefault();
        if (user.email === "abel@mail.com" && user.password === "1234") {
            setUser(user);
        }
    }

    const value = {
        user,
        login
    };

    return (
        <UserLoginContext.Provider value={value}>
            {children}
        </UserLoginContext.Provider>
    );
}

export function useUserLoginContext() {
    return useContext(UserLoginContext);
}
