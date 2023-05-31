import { Link, routes } from '@redwoodjs/router'

const NewsLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Goober Gazette</h1>
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
