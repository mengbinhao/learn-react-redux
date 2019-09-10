import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changeVal}
          />
          <button onClick={this.props.addItem}>button</button>
        </div>
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <li key={index} onClick={() => this.props.deleteItem(index)}>
                {item}
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    items: state.items
  }
}

const mapDispatchToProps = disptch => {
  return {
    changeVal(e) {
      const action = {
        type: 'changeVal',
        value: e.target.value
      }
      disptch(action)
    },
    addItem() {
      const action = {
        type: 'addItem'
      }
      disptch(action)
    },
    deleteItem(index) {
      const action = {
        type: 'deleteItem',
        value: index
      }
      disptch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
