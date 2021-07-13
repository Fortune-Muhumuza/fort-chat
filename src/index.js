import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store/index'
import { Provider } from 'react-redux'
import { fetchUsers } from './store/reducers/users/usersSlice'

import './api/server'

store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
