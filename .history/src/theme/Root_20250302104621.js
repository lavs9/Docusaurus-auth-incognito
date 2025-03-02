import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { cognitoConfig } from '../config/cognito-config';
import { AuthCheck } from '../components/Auth';

export default function Root({ children }) {
  return (
    <AuthProvider {...cognitoConfig}>
      <AuthCheck>
        {children}
      </AuthCheck>
    </AuthProvider>
  );
}
