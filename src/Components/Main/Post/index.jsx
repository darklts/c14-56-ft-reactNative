import { FaRegHeart, FaComment, FaHeart, FaShareAlt } from 'react-icons/fa'
import UserHeader from '@UserHeader'
import PostContent from '@PostContent'

import './Post.css'

const Post = ({
  avatarUrl,
  userName,
  userHandle,
  postContent,
  postImage,
  postDate,
  postId,
  handleLikeClick,
  likesCount,
  liked,
}) => {
  return (
    <div className="profile-post-card">
      <UserHeader
        avatarUrl={avatarUrl}
        userId={userName}
        userHandle={userHandle}
      />
      <PostContent
        postContent={postContent}
        postDate={postDate}
        postImage={postImage?.path}
        postId={postId}
        handleLikeClick={handleLikeClick}
        likesCount={likesCount}
        liked={liked}
      />
    </div>
  )
}
export default Post
