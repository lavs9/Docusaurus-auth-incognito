import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import { configure } from "../config/amplify-config";
import { AuthCheck } from "../components/Auth";

// Configure Amplify before creating the app
configure();

export default function Root({ children }) {
  return (
    <Authenticator.Provider>
      <AuthCheck children={children} />
    </Authenticator.Provider>
  );
}
