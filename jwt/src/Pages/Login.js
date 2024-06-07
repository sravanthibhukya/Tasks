import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Invalid email address');
            return;
        }
        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 number, and 1 special character');
            return;
        }
        // Mock authentication logic
        const mockToken = 'mock-jwt-token';
        localStorage.setItem('token', mockToken);
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-modal">
                <h1>Login Page</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email"
                        required
                    />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password"
                        required
                    />
                    <label>
                        <input 
                            type="checkbox" 
                            checked={showPassword} 
                            onChange={() => setShowPassword(!showPassword)} 
                        />
                        Show Password
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
