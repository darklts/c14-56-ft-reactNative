import { useState, useEffect } from 'react'
import Avatar from '@Avatar'
import './UserHeader.css'
import axios from 'axios'

const UserHeader = ({ avatarUrl, userId, userHandle }) => {
  const [userInfo, setUserInfo] = useState({})
  const { photoProfile, name, userName } = userInfo

  const getUserInfo = () => {
    axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/users/${userId}`)
      .then(res => {
        let values = res?.data?.data
        setUserInfo({
          photoProfile: values?.photoProfile?.path,
          name: values?.name,
          userName: values?.username,
        })
      })
      .catch(err => console.log(err))
  }

  const defaultValue = e => (e ? e : 'Undefined')

  useEffect(() => {
    getUserInfo()
  }, [userId])

  return (
    <div className="profile-post-card-header">
      <div className="profile-post-card-header-photo">
        <Avatar imageUrl={defaultValue(photoProfile)} />
      </div>
      <div className="profile-post-card-header-details">
        <p>{defaultValue(name)}</p>
        <span>@{defaultValue(userName)}</span>
      </div>
    </div>
  )
}

export default UserHeader
