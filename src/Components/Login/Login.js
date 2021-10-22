import Logo from '../../data/whatsappLogo.png';
import { useState } from 'react';
import { FirebaseAuth, Provider } from '../../Firebase';
import './Login.css';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';

const Login = () => {
    console.log("IN the login page")
    const [loading, setLoading] = useState(false);
    const user = useSelector(({ user }) => user);
    const { location } = (useLocation().state || { location: '/' });
    if (user) return <Redirect to={location} />

    const signIn = async () => {
        try {
            setLoading(true)
            await FirebaseAuth.signInWithPopup(Provider)
            setLoading(false)
        } catch {
            setLoading(false)
        }
    }

    return (
        <div className="login-container">
            <div className="main-login-container">
                <img src={Logo} alt="logo" />
                <h2>Welcome To WhatsApp</h2>
                <button onClick={signIn} disabled={loading} className="login-btn">Sign Up With Google</button>
            </div>
        </div>
    )
}

export default Login;
