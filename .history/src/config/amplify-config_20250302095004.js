import { Amplify } from 'aws-amplify';

export function configure() {
    const awsConfig = {
        Auth: {
            region: process.env.REGION,
            userPoolId: process.env.USER_POOL_ID,
            userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID,
            authenticationFlowType: 'USER_SRP_AUTH',
            oauth: {
                domain: process.env.OAUTH_DOMAIN,
                scope: ['openid', 'email'],
                redirectSignIn: process.env.OAUTH_REDIRECT_SIGN_IN,
                redirectSignOut: process.env.OAUTH_REDIRECT_SIGN_OUT,
                responseType: 'code',
                providers: ['COGNITO']
            }
        }
    };

    Amplify.configure(awsConfig);
}
