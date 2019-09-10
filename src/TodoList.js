import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const TodoList = props => {
  let { inputValue, items, changeVal, addItem, deleteItem } = props
  return (
    <Fragment>
      <div>
        <input value={inputValue} onChange={changeVal} />
        <button onClick={addItem}>add item</button>
      </div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} onClick={() => deleteItem(index)}>
              {item}
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
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
