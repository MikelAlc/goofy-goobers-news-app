import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useState } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import { Form, TextField, Submit } from '@redwoodjs/forms'


const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [state, changeState] = useState()

  console.log(currentUser)


  const onSubmit = () => {
    let dateNow = new Date()
    changeState(dateNow.toUTCString())
  }


  return (
    <>
      <MetaTags title="Landing" description="Landing page" />


      {/* When the page initially loads, state is falsy, therefore the && will not
          return a cell. By adding an || and a second operand, the cell will load initially.
          Any subsequent changes to the state triggered by the button will cause the first operand
          to be returned from the || since the state becomes truthy. - Ty'rese */}

      {/*<button id='refresh-button' className='rw-button rw-button-blue' onClick={onSubmit}> Refresh Feed </button>*/}
      { (state && <ArticlesCell criteria={state} />) || <ArticlesCell criteria={'general'} /> }


      {/* All instances of 'zip' have been changed to 'criteria'.
      This string will determine what articles are shown on the page.
      It can be parsed in articles.js to:
        (1) show articles based on categories from user settings
        (2) show articles based on search bar input

      However it may not work for showing articles from the nav bar,
      since the nav bar is in NewsLayout.js and not here.

      We can also add another param besides 'criteria' that will help with pagination.
      The ArticlesCell should change depending on which page the user wants to view.

      - Ty'rese
        */}




    </>
  )
}

export default LandingPage
