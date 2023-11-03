// import { FaHeart } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Posted from '@Post'
import Avatar from '@Avatar'
import './styles.css'

const Post = ({ user, posts }) => {
  return (
    <div className="profile-post">
      <h2 className="profile-post-title">Posts</h2>
      <hr className="profile-post-title-line" />
      <div className="profile-post-box">
        {Array.isArray(posts) ? (
          posts.map(post => (
            <Posted
              key={post?._id}
              userName={post?.userId}
              postContent={post?.description}
              postImage={post?.image}
              postId={post?._id}
              postDate={post?.createdAt}
              likesCount={post?.likesCount}
              liked={post?.liked}
            />
          ))
        ) : (
          <p>No hay publicaciones disponibles</p>
        )}
      </div>
    </div>
  )
}

export default Post
