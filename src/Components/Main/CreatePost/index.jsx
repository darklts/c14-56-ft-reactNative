import { useCookies } from 'react-cookie'
import './CreatePost.css'
import Post from '@Post'
import { useState, useEffect } from 'react'
import axios from 'axios'
import FormData from 'form-data'

const CreatePost = () => {
  const [post, setPost] = useState({
    description: '',
    image: '',
  })

  const [posts, setPosts] = useState([])

  const { userId } = useCookies(['userId'])[0]

  const handleInput = event => {
    setPost({ ...post, [event.target?.name]: event.target?.value })
  }

  const handleFileChange = event => {
    try {
      event.preventDefault()

      setPost({ ...post, image: event.target?.files[0] })
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = event => {
    try {
      event.preventDefault()

      const formData = new FormData()
      formData.append('description', post?.description)
      formData.append('image', post?.image)

      setPost({ image: '', description: '' })

      axios
        .post(
          `http://localhost:3001/api/v1/publications/post/${userId}`,
          formData,
          {
            headers: {
              'Content-Type': `multipart/form-data; boundary=${formData?._boundary}`,
            },
          }
        )
        .then(response => {
          console.log(response)
          setPosts([response.data, ...posts])
        })
        .catch(err => console.log(err))
    } catch (error) {
      console.error(error)
    }
  }

  const handleLikeClick = async (postId, liked) => {
    try {
      if (liked) {
        // Usuario deshace el like
        await axios.delete(
          `https://linkup-5h1y.onrender.com/api/v1/likes/${postId}`
        )
      } else {
        // Usuario da like
        await axios.post(
          `https://linkup-5h1y.onrender.com/api/v1/likes/${postId}`
        )
      }

      // Actualiza el conteo de likes en el estado
      const updatedPosts = posts?.map(p => {
        if (p?._id === postId) {
          return {
            ...p,
            likesCount: liked ? p?.likesCount - 1 : p?.likesCount + 1,
            liked: !liked,
          }
        }
        return p
      })

      setPosts(updatedPosts)
    } catch (error) {
      console.error('Error al manejar el like', error)
    }
  }

  useEffect(() => {
    axios
      .get(`https://linkup-5h1y.onrender.com/api/v1/publications/all/${userId}`)
      .then(response => {
        setPosts(response?.data?.data)
      })
      .catch(err => console.log(err))
  }, [userId])

  const validImage = 'image/jpeg,image/png,image/jpg,image/webp'

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <div className="w-50 text-center">
        <div className="bg-blue">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-200 shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                ¿Qué deseas compartir?
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Escribe tu publicación aquí"
                value={post.description}
                onChange={handleInput}
                name="description"
              />
              <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                accept={validImage}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Publicar
              </button>
            </div>
          </form>
        </div>
        <div>
          {Array.isArray(posts) ? (
            posts.map(post => (
              <Post
                key={post?._id}
                userId={userId}
                userName={post?.userId}
                postContent={post?.description}
                postImage={post?.image}
                postId={post?._id}
                postDate={post?.createdAt}
                handleLikeClick={handleLikeClick}
                likesCount={post?.likesCount}
                liked={post?.liked}
              />
            ))
          ) : (
            <p>No hay publicaciones disponibles</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreatePost
