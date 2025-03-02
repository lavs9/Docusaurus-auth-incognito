import React, { useState, useEffect } from "react";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useLocation, useNavigate } from "@docusaurus/router";
import { getCurrentUser, signOut } from 'aws-amplify/auth';

import { AUTHENTICATED, BASE, LOGIN_PATH, LOGOUT_PATH, PROTECTED_PATHS } from "../../utils/constants";
import { Login } from "../Login";

export function AuthCheck({ children }) {
    const [user, setUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
                
                if (location.pathname === LOGIN_PATH) {
                    navigate(BASE);
                }
            } catch (err) {
                if (PROTECTED_PATHS.some(path => location.pathname.includes(path))) {
                    navigate(LOGIN_PATH, { state: { from: location } });
                }
            }
        };

        checkAuth();
    }, [location.pathname, navigate]);

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate(BASE);
        } catch (error) {
            console.error('Sign out error:', error);
        }
    };

    return user ? children : null;
}

