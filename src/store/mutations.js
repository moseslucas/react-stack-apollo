import gql from 'graphql-tag'

const updateNightMode = gql`
  mutation  (
    $nightMode: Boolean
  ) {
    updateNightMode (
      nightMode: $nightMode
    ) @client
  }
`

export default {
  updateNightMode
}
