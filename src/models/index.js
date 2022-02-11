// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, UserAccount } = initSchema(schema);

export {
  Post,
  UserAccount
};