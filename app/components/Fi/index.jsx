import React, { Component } from 'react';

export default class Fi extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>{this.props.title}: </span>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

Fi.propTypes = {
  title: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string
}

Fi.defaultProps = {
  type: 'text'
}
