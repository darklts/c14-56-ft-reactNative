import './styles.css'
import axios from 'axios'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdAddAPhoto } from 'react-icons/md'
import { useParams } from 'react-router-dom'

import Avatar from '@Avatar'
import { useEffect, useRef, useState } from 'react'

const Banner = ({ user, posts, followers, followeds }) => {
  const [follower, setFollower] = useState(0)
  const [relational, setRelational] = useState()
  const [match, setMatch] = useState(false)

  const fileInputRef = useRef(null)

  const userData = JSON.parse(localStorage.getItem('userData'))
  const { id } = useParams()

  useEffect(() => {
    setFollower(followers)
    getRelacional()
  }, [followers])

  const getRelacional = async () => {
    try {
      const followData = await axios.get(
        `https://linkup-5h1y.onrender.com/api/v1/followers/${id}/${userData?._id}`
      )
      setRelational(followData?.data)
      setMatch(followData?.data.match)
      console.log(followData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFollow = () => {
    try {
      const followData = {
        userFollower: id,
        userFollowed: userData?._id,
      }
      axios.post(
        `https://linkup-5h1y.onrender.com/api/v1/followers`,
        followData
      )

      setFollower(follower + 1)
      setMatch(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUnfollow = () => {
    try {
      axios.delete(
        `https://linkup-5h1y.onrender.com/api/v1/followers/${relational?.data[0]?._id}`
      )

      setFollower(follower - 1)
      setMatch(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileChange = async event => {
    try {
      const formData = new FormData()
      formData.append('file', event?.target?.files[0])
      await axios.post(
        `https://linkup-5h1y.onrender.com/api/v1/uploads/profile/${userData?._id}`,
        formData
      )
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const FollowButton = () => {
    if (userData?._id !== user?._id) {
      return (
        <div className="profile-banner-details-follows-button">
          <button onClick={!match ? handleFollow : handleUnfollow}>
            {!match ? 'Follow' : 'Unfollow'}
          </button>
        </div>
      )
    }
    return null
  }

  const photoIconStyle = {
    width: '30px',
    height: '30px',
    display: 'flex',
    color: 'f2f2f2',
    margin: 'auto',
  }

  const validImage = 'image/jpeg,image/png,image/jpg,image/webp'

  return (
    <div className="profile-banner">
      <div className="profile-banner-container">
        <div className="profile-banner-photo">
          <Avatar
            imageUrl={
              user ? user?.photoProfile?.path : 'src/assets/profileImg.png'
            }
          />
          {userData?._id === user?._id && (
            <>
              <button
                onClick={handleButtonClick}
                className="profile-banner-photo-upload"
              >
                <MdAddAPhoto style={photoIconStyle} />
              </button>
              <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept={validImage}
              />
            </>
          )}
        </div>
        <div className="profile-banner-details">
          <h4 className="profile-banner-details-title">
            {user ? user?.name : 'Cargando...'}{' '}
            <span>{user ? `@${user?.username}` : 'Cargando...'}</span>
          </h4>
          <div className="profile-banner-details-follows">
            <div className="profile-banner-details-follows-location">
              <span>
                <FaMapMarkerAlt
                  style={{ width: 25, height: 25, color: '#fff', margin: 0 }}
                />
              </span>
              <p>{user ? user?.country : 'Cargando...'}</p>
            </div>
            <div className="profile-banner-details-follows-p">
              <p>
                {follower ? follower : 0} <span>Seguidores</span>
              </p>
              <p>
                {followeds ? followeds : 0} <span>Seguidos</span>
              </p>
              <p>
                {posts ? posts : 0} <span>Publicaciones</span>
              </p>
            </div>
          </div>
          <FollowButton />
        </div>
      </div>
    </div>
  )
}

export default Banner
