import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { MAGIC_WORD } from "../../const/magicWord";

export default function Login(){

    const {login} = useAuthContext();
    const [magicWord, setMagicWord] = useState("");

    function handleInputChange(e){
        setMagicWord(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(magicWord === MAGIC_WORD){
            login();
        }
    }

    return(
        <div>
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <input type="password" value={magicWord} onChange={handleInputChange} />
                <button type="submit"> Iniciar Sesión </button>
            </form>
        </div>
    )
}



