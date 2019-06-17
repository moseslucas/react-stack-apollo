import gql from 'graphql-tag'

const nightMode = gql`
  query {
    nightMode @client
  }
`

export default {
  nightMode,
}
