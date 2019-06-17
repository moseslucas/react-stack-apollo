import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'

import './App.css'
import StateManagementExample from './StateManagementExample'

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: 'https://rest-api-link-apollo.herokuapp.com' });

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <StateManagementExample />
  </ApolloProvider>
)

export default App
