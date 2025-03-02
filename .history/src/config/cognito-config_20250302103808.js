export const cognitoConfig = {
  authority: `https://cognito-idp.${process.env.REGION}.amazonaws.com/${process.env.USER_POOL_ID}`,
  client_id: process.env.USER_POOL_WEB_CLIENT_ID,
  redirect_uri: process.env.OAUTH_REDIRECT_SIGN_IN,
  response_type: 'code',
  scope: 'openid email',
  automaticSilentRenew: true,
  revokeAccessTokenOnSignout: true
}; 