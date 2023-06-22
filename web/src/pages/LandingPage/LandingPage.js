import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useState } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import { Form, TextField, Submit } from '@redwoodjs/forms'


const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [state, changeState] = useState()


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
      {(state && <ArticlesCell criteria={state} />) || <ArticlesCell criteria={'general'} /> }




    </>
  )
}

export default LandingPage
