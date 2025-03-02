// components/Login.js
import React from "react";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate } from '@docusaurus/router';

import './styles.css';

export function Login() {
    const navigate = useNavigate();

    return (
        <Authenticator
            loginMechanisms={['email']}
            services={{
                async handleSignIn(formData) {
                    const { signInWithRedirect } = await import('aws-amplify/auth');
                    return signInWithRedirect({ provider: 'COGNITO' }, formData);
                }
            }}
        >
            {({ signOut, user }) => (
                <div>
                    <button onClick={() => navigate('/')}>Continue to Site</button>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
}
