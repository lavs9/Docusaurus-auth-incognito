import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { configure } from "../config/amplify-config";

// Configure Amplify synchronously before React renders anything
configure();

export default function Root({ children }) {
  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  );
}
