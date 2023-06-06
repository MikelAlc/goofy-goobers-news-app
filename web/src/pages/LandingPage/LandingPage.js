import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      <img src="../../images/atrocity.PNG" alt="A pug napping..."></img>
    </>
  )
}

export default LandingPage
