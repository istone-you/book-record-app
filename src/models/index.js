// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Book, BooksGroup } = initSchema(schema);

export {
  Book,
  BooksGroup
};