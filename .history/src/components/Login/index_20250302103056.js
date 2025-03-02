// components/Login.js
import React from "react";
import { useAuth } from 'react-oidc-context';

import './styles.css';

export function Login({ from, navigate }) {
    const auth = useAuth();

    const handleLogin = () => {
        auth.signinRedirect({
            state: from,
            extraQueryParams: {
                identity_provider: 'COGNITO'
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

    return (
        <div className="auth-wrapper">
            <button onClick={handleLogin}>Sign in with Cognito</button>
        </div>
    );
}
