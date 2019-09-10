const defaultState = {
  inputValue: '',
  items: []
}

export default (state = defaultState, action) => {
  if (action.type === 'changeVal') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'addItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.items.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === 'deleteItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.items.splice(action.value, 1)
    return newState
  }

  return state
}
