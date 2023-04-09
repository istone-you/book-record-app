/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
      id
      title
      image
      price
      booksgroupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
      id
      title
      image
      price
      booksgroupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
      id
      title
      image
      price
      booksgroupID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBooksGroup = /* GraphQL */ `
  subscription OnCreateBooksGroup(
    $filter: ModelSubscriptionBooksGroupFilterInput
  ) {
    onCreateBooksGroup(filter: $filter) {
      id
      title
      image
      Books {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBooksGroup = /* GraphQL */ `
  subscription OnUpdateBooksGroup(
    $filter: ModelSubscriptionBooksGroupFilterInput
  ) {
    onUpdateBooksGroup(filter: $filter) {
      id
      title
      image
      Books {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBooksGroup = /* GraphQL */ `
  subscription OnDeleteBooksGroup(
    $filter: ModelSubscriptionBooksGroupFilterInput
  ) {
    onDeleteBooksGroup(filter: $filter) {
      id
      title
      image
      Books {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
