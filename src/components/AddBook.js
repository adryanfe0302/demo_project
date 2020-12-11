import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { getAuthorsQuery } from './../queries/quries'

const AddBook = (props) => {
    const [state, setState] = useState({
      name: '',
      genre: '',
      authorId: ''
    })
    return (
      <>
        <div className="container">
        <label><b>Book Name</b></label>
        <input type="text" placeholder="Enter Book" onChange={(e) => {
          let stateTempo = {...state}
          stateTempo.name = e.target.value
          setState(stateTempo)
        }} />

        <label><b>Genre</b></label>
        <input type="text" placeholder="Enter Genre" onChange={(e) => {
          let stateTempo = {...state}
          stateTempo.genre = e.target.value
          setState(stateTempo)
        }} />

        <label><b>Authors</b></label>
        <select onChange={(e) => {
          let stateTempo = {...state}
          stateTempo.authorId = e.target.value
          setState(stateTempo)
        }}>
            {props.data.loading ? 
                <option disabled value="0">Loading...</option> : 
                props.data.authors.map(item => {
                    return <option value={item.id} key={item.id}>{ item.name }</option>
                })
            }
        </select>

        <button className="registerbtn" onClick={(e) => {
            e.preventDefault()
            console.log('datas', state)
        }}> + Add</button>
        </div>
      </>
    );
  }
  
export default graphql(getAuthorsQuery)(AddBook);
  