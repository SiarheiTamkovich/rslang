import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Blog.scss';

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <div className='page-blog'>
      <h1>News</h1>
      {
        posts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

