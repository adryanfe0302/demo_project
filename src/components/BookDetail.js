import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from './../queries/quries'


const BookDetail = (props) => {
   

    const displayBookDetails = () => {
        const { book } = props.data

        if (book) {
            return <div>
                <h2> {book.name} </h2>
                <p> {book.genre} </p>
                <p> {book.author.name} </p>
                <p>  All Book by this author: </p>
                <ul>
                    {book.author.books.map(item => {
                        return <li key={item.id}> {item.name} </li>
                    })}
                </ul>
            </div>
        } else {
            return <div> No Selected Book. </div>
        }

    }

    return (
      <div>
          <p>  The Book Details Goes here </p>
          {displayBookDetails()}
      </div>
    );
  }
  
export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId 
            } 
        }
    }
})(BookDetail);
  