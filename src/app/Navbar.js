import React from 'react'
import { useDispatch } from 'react-redux'
import { darkModeOn } from '../store/reducers/styleSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const dispatch = useDispatch()

  const bgColor = useSelector(state => state.darkMode.backgroundColor)

  const handleDarkMode = () => {
    if (bgColor === 'white') {
      dispatch(darkModeOn({ backgroundColor: 'black', color: 'white' }))
    } else {
      dispatch(darkModeOn({ backgroundColor: 'white', color: 'black' }))
    }
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
          </div>
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  )
}
