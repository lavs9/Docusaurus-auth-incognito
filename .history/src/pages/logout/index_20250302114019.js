import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useHistory } from '@docusaurus/router';

export default function Logout() {
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await auth.signoutRedirect({
          id_token_hint: auth.user?.id_token,
          post_logout_redirect_uri: window.location.origin,
          state: window.location.origin
        });
      } catch (error) {
        console.error('Logout error:', error);
        history.push('/');
      }
    };

    if (auth.isAuthenticated) {
      performLogout();
    } else {
      history.push('/');
    }
  }, [auth, history]);

  return <div>Signing out...</div>;
}
