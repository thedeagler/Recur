import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  }

  renderItems() {
    return this.props.children.filter(child => child.type.name === 'Fi')
  }

  render() {
    return (
      <div style={styles.form}>
        {this.renderItems()}
        <button onClick={this.props.onSubmit}>Create Recur</button>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'firebrick',
    padding: '1em',
  },
}
