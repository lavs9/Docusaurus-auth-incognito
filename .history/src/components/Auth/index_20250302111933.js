import React, { useEffect, useMemo } from 'react';
import { useAuth } from 'react-oidc-context';
import { useHistory, useLocation } from '@docusaurus/router';
import { PROTECTED_PATHS, LOGIN_PATH, LOGOUT_PATH } from '../../utils/constants';

export function AuthCheck({ children }) {
  const auth = useAuth();
  const location = useLocation();
  const history = useHistory();

  const isProtectedPath = useMemo(() => {
    if ([LOGIN_PATH, LOGOUT_PATH].includes(location.pathname)) return false;
    return PROTECTED_PATHS.some(path => {
      if (path === '/') return location.pathname === path;
      return location.pathname.startsWith(path);
    });
  }, [location.pathname]);

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      // Skip protection check for login path itself
      if (location.pathname === LOGIN_PATH) return;

      const isProtected = PROTECTED_PATHS.some(path => {
        // Exact match for root path
        if (path === '/') return location.pathname === path;
        // StartsWith match for other paths
        return location.pathname.startsWith(path);
      });
      
      if (isProtected) {
        history.push(LOGIN_PATH, { from: location });
      }
    }
  }, [auth.isLoading, auth.isAuthenticated, location.pathname]);

  if (auth.isLoading) return <div>Loading application...</div>;
  
  if (!isProtectedPath) return children;

  return auth.isAuthenticated ? children : null;
}

