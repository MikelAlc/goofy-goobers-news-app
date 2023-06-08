import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import goober from 'web/public/img/goober.png'

const NewsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header>

        <div className="flex-end">
          {isAuthenticated ? (
            <div className="flex-end">
              <span>Logged in as {currentUser.name}&nbsp;</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <div className="title">
          <h1><Link to={routes.landing()}>Goober Gazette</Link></h1>
          <img id='goober' src={goober} alt="Goofy Goober Logo"></img>
        </div>


          <nav>
              <Link to={routes.landing()}>Home</Link>
              <Link >Sports</Link>
              <Link >Business</Link>
          </nav>

      </header>
      <main>{children}</main>
    </>
  )
}

export default NewsLayout
