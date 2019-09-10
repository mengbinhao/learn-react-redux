import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.props.inputValue} />
          <button>button</button>
        </div>
        <ul>
          <li>jack</li>
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

export default connect(
  mapStateToProps,
  null
)(TodoList)
