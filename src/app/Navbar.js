import React from 'react'
import { useDispatch } from 'react-redux'
import { darkModeOn } from '../store/reducers/styleSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchNotifications, selectAllNotifications } from '../store/reducers/notificationsSlice'



export const Navbar = () => {

  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter(n => !n.read).length

  const fetchNewNotifications = () => {
    dispatch(fetchNotifications())
  }

  const bgColor = useSelector(state => state.darkMode.backgroundColor)

  const handleDarkMode = () => {
    if (bgColor === 'white') {
      dispatch(darkModeOn({ backgroundColor: 'black', color: 'white' }))
    } else {
      dispatch(darkModeOn({ backgroundColor: 'white', color: 'black' }))
    }
  }
  let unreadNotificationsBadge

  if (numUnreadNotifications > 0) {
    unreadNotificationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }
  return (
    <nav>
      <section>
        <span>
          <h1>Redux Essentials Example</h1>
          <button onClick={handleDarkMode}>Dark mode</button>
        </span>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications {unreadNotificationsBadge}</Link>
          </div>
          <button className="button" onClick={fetchNewNotifications}>
            Refresh Notifications
          </button>
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  )
}
