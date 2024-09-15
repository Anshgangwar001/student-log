import React, { useState } from 'react';
import './Login.css';  // Import the CSS file

const Login = () => {
    const [name, setName] = useState("");
    const [Name, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login">
            <form className="login_form">
                <h1>Student Login</h1>
                <input 
                    type="text" 
                    placeholder="Institution" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={Name} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" className="submit_btn">
                    Submit
                    </button>
            </form>
        </div>
    );
}

export default Login;
