import React from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
  {
    authors{
      name
      id
    }
  }
`

const AddBook = (props) => {
    return (
      <>
        <div class="container">
        <label><b>Book Name</b></label>
        <input type="text" placeholder="Enter Book" />

        <label><b>Genre</b></label>
        <input type="text" placeholder="Enter Genre" />

        <label><b>Authors</b></label>
        <select>
            {props.data.loading ? 
                <option disabled value="0">Loading...</option> : 
                props.data.authors.map(item => {
                    return <option value={item.id}>{ item.name }</option>
                })
            }
        </select>

        <button class="registerbtn"> + Add</button>
        </div>
      </>
    );
  }
  
export default graphql(getAuthorsQuery)(AddBook);
  