This doc contains my notes as I get everything set up.

* Ran npm install in back-end folder
* Logged into aws console
* aws-cli is already set up, version 2.0.40 (which aws)
* New aws access key set up [here](https://us-east-1.console.aws.amazon.com/iamv2/home#/security_credentials)
* To use my profile : aws command --profile personal
* Pulumi - org name mmadej, logged in with Github credentials
* brew install pulumi/tap/pulumi
* npm install -g @aws-amplify/cli
* pulumi config set aws:profile personal
* Had to export env variables to get pulumi to connect properly - [docs](https://www.pulumi.com/docs/get-started/aws/begin/#configure-pulumi-to-access-your-aws-account)
* Ran npm install in frontend directory and got some errors
* Had to downgrade GraphQL version due to some conflict with apollo-link - not sure if that will cause problems
* pulumi destroy spits out the config data before letting you confirm 
* amplify console in AWS has a link to the site

Questions
* How do I tell what user is logged into aws-cli?  aws sts get-caller-identity --profile personal
  
To do
* Don't use permanent aws access key [some info here](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?icmpid=docs_iam_console#Using_CreateAccessKey)

Links
* [AWS console](https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#)
