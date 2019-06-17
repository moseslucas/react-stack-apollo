import gql from 'graphql-tag'

const list = gql`
  query {
    games @rest (
      type: "Game"
      path: "/games"
    ) {
      payload
    }
  }
`

const add = gql`
  mutation {
    game(input: $input)
    @rest(
      type: "Game"
      path: "/games"
      method: "POST"
    ) {
      payload
    }
  }
`

const remove = gql`
  mutation {
    game(id: $id)
    @rest(
      type: "Game"
      path: "/games/{args.id}"
      method: "DELETE"
    ) {
      payload
    }
  }
`

export default {
  list,
  add,
  remove,
}
