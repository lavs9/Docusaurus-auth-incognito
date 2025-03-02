// components/Login.js
import React from "react";
import { useAuth } from 'react-oidc-context';
import { useHistory } from '@docusaurus/router';

import './styles.css';

export function Login() {
    const auth = useAuth();
    const history = useHistory();

    const handleLogin = () => {
        auth.signinRedirect({
            state: history.location.pathname,
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

    if (auth.isAuthenticated) {
        history.push('/');
        return null;
    }

    return (
        <div className="auth-wrapper">
            <button onClick={handleLogin}>Sign in with Cognito</button>
        </div>
    );
}
