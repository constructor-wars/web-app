import React from 'react';

class Instructions extends React.Component {
  render() {
    return <div><pre>{this.props.data}</pre></div>;
  }
}

export default Instructions;
