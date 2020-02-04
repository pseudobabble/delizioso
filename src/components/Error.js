import React, {Component} from 'react'
import {connect} from 'react-redux'

class Error extends Component {
  render() {
    const error = this.props.error ? this.props.error.message : 'Error';
    return (
      <p>
        {/*{this.props.error.message}*/}
        {error}
      </p>
    )
  }
}


export default connect((state) => ({
  error: state.error
}))(Error)
