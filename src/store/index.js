import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './reducers/postsSlice'
import darkModeReducer from './reducers/styleSlice'
import usersReducer from './reducers/users/usersSlice'


export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    darkMode: darkModeReducer
  }
})