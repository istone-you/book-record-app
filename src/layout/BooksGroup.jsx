import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listBooksGroups } from '../graphql/queries'
import Group from '../common/Group'


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
            <div style={{ display: "flex" }}>
                {books.map((book) => (
                    <Group book={book} />
                ))}
            </div>
        </div>
    )
}

export default BooksGroup