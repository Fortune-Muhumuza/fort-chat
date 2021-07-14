import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { AddPostForm } from './app/AddPostForm'
import { PostsList } from './app/PostsList'
import { SinglePostPage } from './app/SinglePostPage'
import { EditPostForm } from './app/EditPostForm'
import { UsersList } from './app/UsersList'
import { UserPage } from './app/UserPage'
import { useSelector } from 'react-redux'

function App() {

  const bgColor = useSelector(state => state.darkMode.backgroundColor)
  const textColor = useSelector(state => state.darkMode.color)

  console.log(bgColor)
  

  return (
    <Router>
      <Navbar />
      <div className="App" style={{backgroundColor: bgColor, color: textColor}}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/users" component={UsersList} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App