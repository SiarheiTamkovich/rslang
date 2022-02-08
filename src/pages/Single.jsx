import { useParams } from "react-router";
import { useState, useEffect } from 'react'
import './Single.scss'

export const Single = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null)
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id]);

  return (
    <div className="single-page">
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
  
}