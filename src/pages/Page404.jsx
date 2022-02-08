import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      This page doesn't exist. Go <Link to="/">home</Link>
    </div>
  )
}

export {Page404};