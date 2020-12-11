import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from './../queries/quries'


const BookList = (props) => {
    return (
      <div>
          <ul id='book-list'>
            {
              props.data.loading ? 'loading books' :
              props.data.books.map((book,index) => {
                return <li key={book.id}> 
                  {book.name}
                </li>
              })
            }
          </ul>
      </div>
    );
  }
  
export default graphql(getBookQuery)(BookList);
  