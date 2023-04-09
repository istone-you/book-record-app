/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBooksGroup = /* GraphQL */ `
  mutation CreateBooksGroup(
    $input: CreateBooksGroupInput!
    $condition: ModelBooksGroupConditionInput
  ) {
    createBooksGroup(input: $input, condition: $condition) {
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
export const updateBooksGroup = /* GraphQL */ `
  mutation UpdateBooksGroup(
    $input: UpdateBooksGroupInput!
    $condition: ModelBooksGroupConditionInput
  ) {
    updateBooksGroup(input: $input, condition: $condition) {
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
export const deleteBooksGroup = /* GraphQL */ `
  mutation DeleteBooksGroup(
    $input: DeleteBooksGroupInput!
    $condition: ModelBooksGroupConditionInput
  ) {
    deleteBooksGroup(input: $input, condition: $condition) {
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
