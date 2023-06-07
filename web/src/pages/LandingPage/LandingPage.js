import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      {isAuthenticated ? (
          <img src="img/meme.jpg" alt="Coding meme" width="200px"></img>
        ) : (
          <img src="img/PA.jpeg" alt="A pug napping" width="200px"></img>
        )}
    </>
  )
}

export default LandingPage
