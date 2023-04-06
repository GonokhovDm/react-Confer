import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div id="not-found">
        <h1>404</h1>
        <h2>Oops! Page not found.</h2>
        <Link to='/react-confer/'>Home</Link>
    </div>
  )
}

export default Page404
