import './InteractionButtons.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const InteractionButtons = ({ postId }) => {
  const { userId } = useCookies(['userId'])[0]

  const [likesCount, setLikesCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [likeId, setLikeId] = useState(undefined)

  useEffect(() => {
    axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/likes/${postId}/${userId}`)
      .then(res => {
        const likeData = res?.data?.data?.find(like => like?.userId === userId)
        setLikesCount(res?.data?.data?.length)
        setIsLiked(!!likeData)
        setLikeId(likeData ? likeData?._id : undefined)
      })
      .catch(error => {
        console.log(error)
      })
  }, [postId, userId])

  const handleLike = async () => {
    if (isLiked) {
      // Si ya le diste "me gusta", elimina el like
      try {
        await axios.delete(
          `https://linkup-5h1y.onrender.com/api/v1/likes/${likeId}`
        )
        setLikesCount(likesCount - 1)
        setIsLiked(false)
      } catch (error) {
        console.log(error)
      }
    } else {
      // Si aún no le diste "me gusta", agrega el like
      try {
        await axios.post(
          `https://linkup-5h1y.onrender.com/api/v1/likes/${postId}/${userId}`
        )
        setLikesCount(likesCount + 1)
        setIsLiked(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="interaction-buttons">
      <button
        className={`heart-button ${isLiked ? 'liked' : ''}`}
        onClick={handleLike}
      >
        <ion-icon name="heart"></ion-icon>
        {likesCount} <span>Me gusta</span>
      </button>
      <button className="button">
        <ion-icon name="chatbubble"></ion-icon>
        <span className="comment-count">0</span>
      </button>
    </div>
  )
}

export default InteractionButtons
