import { Link, routes } from '@redwoodjs/router'
import goober from 'web/src/images/goober.png'

const NewsLayout = ({ children }) => {
  return (
    <>
      <header>
        <div class="title">
          <h1>Goober Gazette</h1>
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
