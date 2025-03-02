import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useHistory, useLocation } from '@docusaurus/router';
import { PROTECTED_PATHS, LOGIN_PATH } from '../../utils/constants';

export function AuthCheck({ children }) {
  const auth = useAuth();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      // Check if current path is protected
      const isProtected = PROTECTED_PATHS.some(path => 
        location.pathname === path || location.pathname.startsWith(path)
      );
      
      if (isProtected) {
        history.push(LOGIN_PATH, { from: location });
      }
    }
  }, [auth.isLoading, auth.isAuthenticated, location.pathname]);

  if (auth.isLoading) return <div>Loading application...</div>;
  
  return auth.isAuthenticated ? children : null;
}

