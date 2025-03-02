// components/Login.js
import React from "react";

import { Authenticator } from '@aws-amplify/ui-react';
import { signInWithRedirect } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate } from '@docusaurus/router';

import './styles.css';

export function Login() {
    const navigate = useNavigate();

    return (
        <Authenticator
            loginMechanisms={['email']}
            signUpAttributes={['email']}
            services={{
                async handleSignIn() {
                    try {
                        await signInWithRedirect();
                    } catch (error) {
                        console.error('Sign in failed:', error);
                    }
                }
            }}
        >
            {({ signOut, user }) => (
                <div className="auth-wrapper">
                    <h2>Welcome {user?.signInDetails?.loginId}</h2>
                    <button onClick={() => navigate('/')}>
                        Continue to Site
                    </button>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
}
