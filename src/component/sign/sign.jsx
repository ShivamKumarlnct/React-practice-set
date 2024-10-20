import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import './sign.css';

function LoginRegister() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(true);  
    const [getErr, setGetErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        if (user.length < 5 || password.length < 7) {
            alert("Please type correct details.");
        } else {
            const userData = { username: user, password: password };
            localStorage.setItem("userData", JSON.stringify(userData));  
            alert("Registration successful! You can now log in.");
            setIsRegister(false);  
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem("userData"));
        
        if (storedData && user === storedData.username && password === storedData.password) {
            alert("Login successful!");
            navigate("/");  
        } else {
            alert("Incorrect username or password.");
        }
    }

    function handleUserChange(e) {
        let item = e.target.value;
        if (item.length < 5) {
            setGetErr(true);
        } else {
            setGetErr(false);
        }
        setUser(item);
    }

    function handlePasswordChange(e) {
        let item = e.target.value;
        if (item.length < 7) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(item);
    }

    return (
        <div className="mainsign">
            <div className="sign">
                <h3>{isRegister ? "Register" : "Login"}</h3>
                <form onSubmit={isRegister ? handleRegister : handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Enter username" 
                        onChange={handleUserChange}
                        required
                    />
                    {getErr && <span>Username must be at least 5 characters</span>}
                    <br />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={handlePasswordChange}
                        required
                    />
                    {passErr && <span>Password must be at least 7 characters</span>}
                    <br />
                    <button type="submit">{isRegister ? "Register" : "Login"}</button>
                </form>
                
                <p>
                    {isRegister ? "Already have an account?" : "Don't have an account?"} 
                    <span className="toggle-link" onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? " Login" : " Register"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default LoginRegister;
