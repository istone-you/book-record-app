import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listBooksGroups } from '../graphql/queries'


const BooksGroup = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await API.graphql(graphqlOperation(listBooksGroups))
                const booksData = response.data.listBooksGroups.items
                setBooks(booksData)
            } catch (err) {
                console.log('error fetching books...', err)
            }
        }
        fetchBooks()
    }, [])
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <h2>{book.title}</h2>
                        <p>{book.id}</p>
                        <img src={book.image} alt={book.title} />
                        <p>{book.createdAt}</p>
                        <p>{book.updatedAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BooksGroup