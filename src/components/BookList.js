import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from './../queries/quries'
import BookDetail from './BookDetail'


const BookList = (props) => {
    const [selected, setSelected] = useState(null)
    return (
      <div>
          <ul id='book-list'>
            {
              props.data.loading ? 'loading books' :
              props.data.books.map((book,index) => {
                return <li key={book.id} onClick={() => {
                  setSelected(book.id)
                }}> 
                  {book.name}
                </li>
              })
            }
          </ul>
          <BookDetail bookId={selected} />
      </div>
    );
  }
  
export default graphql(getBooksQuery)(BookList);
  