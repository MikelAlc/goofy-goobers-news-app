import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import ArticlesCell from 'src/components/ArticlesCell'

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ea1d97965ac4d75a9ba09b29075cc1c')
  //   .then(response => response.json())
  //   .then(json => console.info(json))

  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      {/* {isAuthenticated ? (
          <div className="display">
            <h3>Meme of the Day</h3><br></br>
            <img id='meme' src="img/meme.jpg"></img>
          </div>
        ) : (
          <div className="display">
            <h3>Login to view Meme of the Day</h3>
          </div>

        )} */}

      <ArticlesCell zip={'07079'} />



    </>
  )
}

export default LandingPage
