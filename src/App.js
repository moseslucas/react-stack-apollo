import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'

import Routes from './Routes'
import defaults from './store/defaults'
import resolvers from './store/resolvers'
import './App.css'

/* setup your `RestLink` with your endpoint */
const restLink = new RestLink({ uri: 'https://rest-api-link-apollo.herokuapp.com' })

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  defaults,
  resolvers
})

/* setup your client */
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    restLink
  ])
});

client.onResetStore(stateLink.writeDefaults)

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

export default App
