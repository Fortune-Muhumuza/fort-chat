import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './reducers/postsSlice'
import darkModeReducer from './reducers/styleSlice'
import usersReducer from './reducers/users/usersSlice'
import notificationsReducer from './reducers/notificationsSlice'


export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
    darkMode: darkModeReducer
  }
})