/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '4dg4h2llskchf4a93v7kq2lotr',
  USER_POOL_ID: 'us-east-1_uPzaHbp7q',
  IDENTITY_POOL_ID: 'us-east-1:69c432ca-97bc-42b3-8814-beaeb72eafd0',
  GRAPHQL_ENDPOINT: 'https://mh54hhgaxbdtxf2voldvvsmsge.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;
