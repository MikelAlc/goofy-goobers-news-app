import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import meme from 'web/src/images/meme.jpg'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      <div class="display">
        <h3>Meme of the Day</h3><br></br>
        <img id='meme' src={meme}></img>
      </div>
    </>
  )
}

export default LandingPage
