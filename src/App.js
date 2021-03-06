import React from 'react'
import ApolloClient from 'apollo-boost'
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import { ApolloProvider } from 'react-apollo'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}> 
    <div className="Main">
        <h1> List Book</h1>
        <BookList />
        
        <h1> Add Book</h1>
        <AddBook />
    </div>
    </ApolloProvider>
  );
}

export default App;
