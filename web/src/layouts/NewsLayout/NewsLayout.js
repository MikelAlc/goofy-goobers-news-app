import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import logo from 'web/public/img/pub_logos.png'

const NewsLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header>
      <div class="title">
          <Link to={routes.landing()}><img id='logo' src={logo} alt="Goofy Goober Logo"></img></Link>

      </div>
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
