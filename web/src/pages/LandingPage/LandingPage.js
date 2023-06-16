import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import WeatherCell from 'src/components/WeatherCell'

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      {isAuthenticated ? (
          <div className="display">
            <h3>Meme of the Day</h3><br></br>
            <img id='meme' src="img/meme.jpg"></img>
          </div>
        ) : (
          <div className="display">
            <h3>Login to view Meme of the Day</h3>
          </div>

        )}

      <WeatherCell zip={'07079'} />


    </>
  )
}

export default LandingPage
