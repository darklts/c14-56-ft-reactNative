import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Comments = ({ postId, userId, onClose }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://linkup-5h1y.onrender.com/api/v1/comments/all/${postId}`
        )
        setComments(response?.data?.data || [])
      } catch (error) {
        console.error('Error al obtener los comentarios', error)
        setComments([])
      }
    }

    fetchComments()
  }, [postId])

  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `https://linkup-5h1y.onrender.com/api/v1/comments/${postId}`,
        {
          text: newComment,
          userId: userId,
        }
      )

      setComments([...comments, response?.data])
      setNewComment('')

      // Cierra el modal cuando se agrega un comentario
      onClose()
    } catch (error) {
      console.error('Error al agregar un comentario', error)
    }
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Comentarios</h3>
        <button onClick={onClose}>Cerrar</button>
        <div className="comments-list">
          {comments?.map(comment => (
            <div key={comment?._id} className="comment">
              <span>{comment?.text}</span>
              <span>Usuario: {comment?.userId}</span>
            </div>
          ))}
        </div>
        <div>
          <textarea
            placeholder="Agrega un comentario..."
            value={newComment}
            onChange={e => setNewComment(e?.target?.value)}
          />
          <button onClick={handleAddComment}>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Comments
