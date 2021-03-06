import React from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from './../queries/quries'
import './BookDetail.css'

const BookDetail = (props) => {
    const displayBookDetails = () => {
        const { book } = props.data
        console.log('props', props)
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
          <div id="myModal" className="modal">
            <div className="modal-content">
            <span className="close" onClick={() => {
                props.setShow(false)
            }}>&times;</span>
                <p>  The Book Details Goes here </p>
                    {displayBookDetails()}
            </div>
            </div>
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
  