import React, { useState } from "react";
import './sign.css';

function Sign() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [getErr, setGetErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function logged(e) {
        e.preventDefault();
        if (user.length < 5 || password.length < 5) {
            alert("Please type correct details.");
        } else {
            alert("All good :)");
        }
    }

    function handleUserChange(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setGetErr(true);
        } else {
            setGetErr(false);
        }
        setUser(item);
    }

    function handlePasswordChange(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(item);
    }

    return (
<div className="mainsign">
        <div className="sign">
            <h3>Sign-Up</h3>
            <form onSubmit={logged}>
                <input 
                    type="text" 
                    placeholder="Enter username" 
                    onChange={handleUserChange}
                    required
                />
                {getErr && <span>Invalid username</span>}
                <br />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={handlePasswordChange}
                    required

                />
                {passErr && <span>Invalid password</span>}
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    );
}

export default Sign;
