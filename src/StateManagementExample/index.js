import React, { Component } from 'react'
import Form from './Form'

class StateManagementExample extends Component {
  /* Your Local State as the data source  */
  state = {
    data: [
      { id: 1, name: 'Final Fantasy 7 Remake' },
      { id: 2, name: 'The Last of Us 2' },
      { id: 3, name: 'Death Stranding' },
    ],
    nightmode: false
  }

  /* Function to Append data to the state */
  handleAdd = (text) => {
    this.setState(prevState => ({
      data: prevState.data.concat({
        id: prevState.data.length + 1,
        name: text
      })
    }))
  }

  /* Function to Remove data from the state */
  handleRemove = (record) => {
    this.setState(prevState => ({
      data: prevState.data.filter(item => item.id !== record.id)
    }))
  }

  /* Function to toggle nightmode value */
  handleNightMode = () => {
    const { nightmode } = this.state
    this.setState({ nightmode: !nightmode })
  }

  render () {
    /* passes this.state.data to Form for rendering data */
    const { data, nightmode } = this.state
    return (
      <Form
        data={data}
        nightmode={nightmode}
        handleNightMode={this.handleNightMode}
        handleRemove={this.handleRemove}
        handleAdd={this.handleAdd}
      />
    )
  }
}

export default StateManagementExample
