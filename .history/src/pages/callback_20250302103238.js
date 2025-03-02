import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useHistory } from '@docusaurus/router';

export default function Callback() {
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!auth.isLoading && !auth.error) {
      history.push(auth.user?.state || '/');
    }
  }, [auth.isLoading, auth.error]);

  return <div>Completing login...</div>;
}
