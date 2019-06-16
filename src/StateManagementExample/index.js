import React, { Component } from 'react'
import Form from './Form'

class StateManagementExample extends Component {
  state = {
    data: [
      { id: 1, name: 'Final Fantasy 7 Remake' },
      { id: 2, name: 'The Last of Us 2' },
      { id: 3, name: 'Death Stranding' },
    ]
  }

  handleAdd = (text) => {
    this.setState(prevState => ({
      data: prevState.data.concat({
        id: prevState.data.length + 1,
        name: text
      })
    }))
  }

  handleRemove = (record) => {
    console.log(record)
    this.setState(prevState => ({
      data: prevState.data.filter(item => item.id !== record.id)
    }))
  }

  render () {
    const { data } = this.state
    return (
      <Form
        data={data}
        handleRemove={this.handleRemove}
        handleAdd={this.handleAdd}
      />
    )
  }
}

export default StateManagementExample
