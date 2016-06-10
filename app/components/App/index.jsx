import React, { Component } from 'react'
import Form from 'Form'
import Fi from 'Fi'

export default class App extends Component {
  createRecur() {
    console.log('hello')
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.createRecur}>
          <Fi title='Title' placeholder='Rent from Sammy' />
          <Fi title='To' placeholder='Sammy' />
          <Fi title='Amount' type='number' placeholder='$12.32' />
          <Fi title='Description' placeholder='Rent' />
        </Form>
      </div>
    )
  }
}
