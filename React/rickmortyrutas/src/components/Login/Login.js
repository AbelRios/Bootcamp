import { useState } from "react";
import { useUserLoginContext } from "../../contexts/UserLoginContext";

export default function Login() {

    const { login } = useUserLoginContext();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleInputs(e) {
        setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
    }

    return (
        <div className="container">
            <form onSubmit={(e) => login(user,e)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                        type="email" 
                        value={user.email}
                        name="email"
                        className="form-control" 
                        onChange={handleInputs}
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        value={user.password}
                        name="password"
                        className="form-control" 
                        onChange={handleInputs}
                        id="exampleInputPassword1"/>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}