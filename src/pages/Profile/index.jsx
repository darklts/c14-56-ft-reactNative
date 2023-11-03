import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Avatar from '@Avatar'
import Header from '@Header'
import NavBar from '@NavBar'
import About from '@Perfil/About'
import Banner from '@Perfil/Banner'
import Post from '../../Components/Perfil/Posted'

const Index = () => {
  const [user, setUser] = useState()
  const [posts, setPosts] = useState()
  const [followers, setFollowers] = useState()
  const [followeds, setFolloweds] = useState()
  const { id } = useParams()

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://linkup-5h1y.onrender.com/api/v1/publications/own/${id}`
      )
      setPosts(response?.data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  // const updateProfilePosts = newPost => {
  //   // Actualiza las publicaciones en el estado de Profile
  //   setPosts([newPost, ...posts])
  // }

  const getFollowers = async () => {
    try {
      const response = await axios.get(
        `https://linkup-5h1y.onrender.com/api/v1/followers/all/${id}`
      )
      setFollowers(response?.data)
    } catch (error) {
      console.error(error)
    }
  }
  const getFolloweds = async () => {
    try {
      const response = await axios.get(
        `https://linkup-5h1y.onrender.com/api/v1/followers/followed/${id}`
      )
      setFolloweds(response?.data?.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://linkup-5h1y.onrender.com/api/v1/users/${id}`
      )
      setUser(response?.data?.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getUser()
    getPosts()
    getFollowers()
    getFolloweds()
  }, [id])

  return (
    <div>
      <Header>
        <NavBar>
          <Avatar imageUrl={user?.photoProfile?.path} />
          {user?.name}
        </NavBar>
      </Header>
      <div className="bg-slate-300 w-full h-60 profile-banner">
        <Banner
          user={user}
          posts={posts?.length}
          followers={followers?.length}
          followeds={followeds?.length}
        />
      </div>
      <div className="body-profile">
        <div className="body-profile-about">
          <About description={user?.description} />
        </div>
        <div className="body-profile-post">
          <Post user={user} posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default Index
