import React, { Component } from 'react'

export default class Form extends Component {
  componentWillMount() {

  }

  renderFields() {
    return this.props.children.filter(function(child) {
      return child.type.name === 'Fi'
    })
  }

  render() {
    return (
      <div>
        {this.renderFields()}
      </div>
    );
  }
}
