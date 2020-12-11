import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
{
  authors{
    name
    id
  }
}
`

const getBookQuery = gql`
  {
    books{
      name
      id
    }
  }
`

export { getAuthorsQuery, getBookQuery }