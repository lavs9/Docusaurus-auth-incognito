import React, { useEffect } from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

import { configure } from "../config/amplify-config";
import { AuthCheck } from "../components/Auth";

export default function Root({ children }) {
  useEffect(() => {
    configure();
  }, []);

  return (
    <Authenticator.Provider>
      {children}
    </Authenticator.Provider>
  );
}
