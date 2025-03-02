import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate, useLocation } from '@docusaurus/router';
import { PROTECTED_PATHS, LOGIN_PATH } from '../../utils/constants';

export function AuthCheck({ children }) {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      if (PROTECTED_PATHS.some(path => location.pathname.includes(path))) {
        navigate(LOGIN_PATH, { state: { from: location } });
      }
    }
  }, [auth.isLoading, auth.isAuthenticated, location.pathname]);

  if (auth.isLoading) return <div>Loading...</div>;
  
  return auth.isAuthenticated ? children : null;
}

