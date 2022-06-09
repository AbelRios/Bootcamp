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
        <div className="App">
            <header className="row App-header-dark">
                <div className="col-auto">
                    <UserLoginContext.Provider value={value}>
                        {children}
                    </UserLoginContext.Provider>
                </div>
            </header>
        </div>
    );
}

export function useUserLoginContext() {
    return useContext(UserLoginContext);
}
