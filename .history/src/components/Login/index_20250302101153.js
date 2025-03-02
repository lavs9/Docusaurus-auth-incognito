// components/Login.js
import React from "react";
import { useAuth } from 'react-oidc-context';
import { useNavigate } from '@docusaurus/router';

import './styles.css';

export function Login() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.signinRedirect({
            extraQueryParams: {
                identity_provider: 'COGNITO' // If using social providers
            }
        });
    };

    if (auth.isLoading) return <div>Loading...</div>;
    
    if (auth.error) return (
        <div>
            Authentication Error: {auth.error.message}
            <button onClick={handleLogin}>Retry Login</button>
        </div>
    );

    if (auth.isAuthenticated) {
        navigate('/');
        return null;
    }

    return (
        <div className="auth-wrapper">
            <button onClick={handleLogin}>Sign in with Cognito</button>
        </div>
    );
}
