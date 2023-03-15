import { Output } from '@pulumi/pulumi';

export const variables = {
  region: 'us-east-1' as const,
  dynamoDBTables: {} as Record<string, Output<string>>,
};
