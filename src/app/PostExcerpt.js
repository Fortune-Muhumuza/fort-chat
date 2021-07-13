import React from 'react'
import { Link } from 'react-router-dom'
import { PostAuthor } from './postAuthor'
import { ReactionButtons } from './ReactionButtons'

const PostExcerpt = ({post}) => {
    return (
        <div>
            <article className="post-excerpt" key={post.id}>
                <PostAuthor userId={post.user} />
                <h3>{post.title}</h3>
                <p className="post-content">{post.content.substring(0, 100)}</p>
                <ReactionButtons post={post} />
                <Link to={`/posts/${post.id}`} className="button muted-button">
                    View Post
                </Link>
            </article>
        </div>
    )
}

export default PostExcerpt
