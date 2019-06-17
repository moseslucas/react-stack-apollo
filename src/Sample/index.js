import React, { Component } from 'react'
import { Query, compose, graphql } from 'react-apollo'
import GAME from '../api/Game'
import Form from './Form'

class Sample extends Component {
  /* Your Local State as the data source  */
  state = {
    nightmode: false
  }

  /* POST new game */
  handleAdd = (text) => {
    const { addGame } = this.props

    /* Variable values should be wrapped in { input } object */
    const variables = {
      input: {
        name: text
      }
    }

    addGame({ variables })
      .then((res) => {
        console.log('Added Game: ', res)
      })
      .catch((err) => {
        console.log('Error adding game: ', err)
      })
  }

  /* DELETE game */
  handleRemove = (record) => {
    const { removeGame } = this.props

    const variables = { id: record.id }

    removeGame({ variables })
      .then((res) => {
        console.log('Removed Game: ', res)
      })
      .catch((err) => {
        console.log('Error removing game: ', {err})
      })
  }

  /* Function to toggle nightmode value */
  handleNightMode = () => {
    const { nightmode } = this.state
    this.setState({ nightmode: !nightmode })
  }

  render () {
    const { nightmode } = this.state
    return (
      <Query query={GAME.list}>
        {({ loading, error, data }) => {
          if (error) return null
          if (loading) return (<h1> Loading </h1>)

          const { games: { payload: { games } } } = data

          return (
            <Form
              data={games}
              nightmode={nightmode}
              handleNightMode={this.handleNightMode}
              handleRemove={this.handleRemove}
              handleAdd={this.handleAdd}
            />
          )
        }}
      </Query>
    )
  }
}

export default compose(
  graphql(
    GAME.add,
    {
      name: 'addGame',
      options: {
        refetchQueries: [{ query: GAME.list }]
      }
    }
  ),
  graphql(
    GAME.remove,
    {
      name: 'removeGame',
      options: {
        refetchQueries: [{ query: GAME.list }]
      }
    }
  ),
)(Sample)
