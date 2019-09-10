import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Todolist from './TodoList'

const App = (
  <Provider store={store}>
    <Todolist />
  </Provider>
)
ReactDOM.render(App, document.getElementById('root'))
