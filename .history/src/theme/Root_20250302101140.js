import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { cognitoConfig } from '../config/cognito-config';

export default function Root({ children }) {
  return (
    <AuthProvider {...cognitoConfig}>
      {children}
    </AuthProvider>
  );
}
