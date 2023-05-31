import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      {isAuthenticated ? (
          <img src="meme.jpg" alt="Coding meme"></img>
        ) : (
          <img src="atrocity.PNG" alt="A pug napping"></img>   
        )}
    </>
  )
}

export default LandingPage
