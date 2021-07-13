import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts } from '../store/reducers/postsSlice'
import PostExcerpt from './PostExcerpt'

export const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const dispatch = useDispatch()

  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)


  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  let content

  if (postStatus === 'loading') {
    content = <div className="loader">Loading...</div>
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map(post => (
      <PostExcerpt key={post.id} post={post} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  // const renderedPosts = orderedPosts.map(post => {
  //   return (
  //     <article className="post-excerpt" key={post.id}>
  //       <PostAuthor userId={post.user} />
  //       <h3>{post.title}</h3>
  //       <p className="post-content">{post.content.substring(0, 100)}</p>
  //       <ReactionButtons post={post} />
  //       <Link to={`/posts/${post.id}`} className="button muted-button">
  //         View Post
  //       </Link>
  //     </article>
  //   )
  // })


  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}