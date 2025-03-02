import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from '@docusaurus/router';

export default function Logout() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await auth.signoutRedirect({
          post_logout_redirect_uri: window.location.origin
        });
      } catch (error) {
        console.error('Logout error:', error);
        navigate('/');
      }
    };

    if (auth.isAuthenticated) {
      performLogout();
    } else {
      navigate('/');
    }
  }, []);

  return <div>Signing out...</div>;
}
