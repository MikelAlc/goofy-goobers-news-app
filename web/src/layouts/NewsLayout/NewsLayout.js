import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

const NewsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.landing()}>Goober Gazette</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.name}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.landing()}>Home</Link>
            </li>
            <li>
              <p>Goofy</p>
            </li>

          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default NewsLayout
