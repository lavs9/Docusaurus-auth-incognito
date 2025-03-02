import { WebStorageStateStore } from 'oidc-client-ts';
export const cognitoConfig = {
  authority: `https://cognito-idp.${process.env.REGION}.amazonaws.com/${process.env.USER_POOL_ID}`,
  client_id: process.env.USER_POOL_WEB_CLIENT_ID,
  redirect_uri: process.env.OAUTH_REDIRECT_SIGN_IN,
  response_type: 'code',
  scope: 'openid email',
  automaticSilentRenew: true,
  revokeAccessTokenOnSignout: true,
  // Add these new configurations
  monitorSession: true, // Monitors the user session across tabs
  userStore: new WebStorageStateStore({ store: window.localStorage }), // Persists state in localStorage
  silent_redirect_uri: process.env.OAUTH_REDIRECT_SIGN_IN, // Same as redirect URI for silent renew
  post_logout_redirect_uri: process.env.OAUTH_REDIRECT_SIGN_OUT || window.location.origin,
}; 