import React, { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import { useNavigate } from '@docusaurus/router';

export default function Callback() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoading && !auth.error) {
      navigate(auth.user?.state || '/');
    }
  }, [auth.isLoading, auth.error]);

  return <div>Completing login...</div>;
}
