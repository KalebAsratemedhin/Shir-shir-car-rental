import { Link } from "react-router-dom"


const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to the Car Renting app</h1>

      <div className="links">
        <Link className="auth-links" to='/signup'>signup </Link>
        <Link className="auth-links" to='/signin'>signin </Link>
      </div>

    </div>
  )
}

export default Welcome