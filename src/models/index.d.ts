import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: string | null;
  readonly price?: number | null;
  readonly booksgroupID: string;
  readonly BooksGroup?: BooksGroup | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Book, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: string | null;
  readonly price?: number | null;
  readonly booksgroupID: string;
  readonly BooksGroup: AsyncItem<BooksGroup | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Book = LazyLoading extends LazyLoadingDisabled ? EagerBook : LazyBook

export declare const Book: (new (init: ModelInit<Book>) => Book) & {
  copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

type EagerBooksGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BooksGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: string | null;
  readonly Books?: (Book | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBooksGroup = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BooksGroup, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly image?: string | null;
  readonly Books: AsyncCollection<Book>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BooksGroup = LazyLoading extends LazyLoadingDisabled ? EagerBooksGroup : LazyBooksGroup

export declare const BooksGroup: (new (init: ModelInit<BooksGroup>) => BooksGroup) & {
  copyOf(source: BooksGroup, mutator: (draft: MutableModel<BooksGroup>) => MutableModel<BooksGroup> | void): BooksGroup;
}