import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useState } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import logo from 'web/public/img/pub_logos.png'
import { Label, Form, NumberField, ButtonField, Submit } from '@redwoodjs/forms'


const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [state, changeState] = useState()


  const setCategory = (event) => { // switch category, select proper tab
    // event.target.style.color = '#fa9dec'
    changeState(event.target.id) // the state will be the category itself, except 'home'
  }


  return (
    <>

      {/* nav bar moved here for ease of use with article selection */}

      <header>
        <div className="title">
            <Link to={routes.landing()}><img id='logo' src={logo} alt="Goofy Goober Logo"></img></Link>
        </div>
          <div className="flex-end">
            {isAuthenticated ? (
              <div className="flex-end">
                <span>Logged in as {currentUser.name}&nbsp;</span>{' '}
                <button type="button" onClick={logOut} className='rw-button rw-button-blue'>Logout</button>
              </div>
            ) : (
              <Link to={routes.login()} className='rw-button rw-button-blue'>Login</Link>
            )}
          </div>
            <nav>
                <Link id='home' >Home</Link>
                <Link id='general' onClick={setCategory}>General</Link>
                <Link id='business' onClick={setCategory}>Business</Link>
                <Link id='entertainment' onClick={setCategory}>Entertainment</Link>
                <Link id='health' onClick={setCategory}>Health</Link>
                <Link id='science' onClick={setCategory}>Science</Link>
                <Link id='sports' onClick={setCategory}>Sports</Link>
                <Link id='technology' onClick={setCategory}>Technology</Link>
                {isAuthenticated? <Link to={routes.settings()}>Settings</Link>:<></>}
            </nav>
      </header>


      <MetaTags title="Landing" description="Landing page" />

      {/* When the page initially loads, state is falsy, therefore the && will not
          return a cell. By adding an || and a second operand, the cell will load initially.
          Any subsequent changes to the state triggered by the button will cause the first operand
          to be returned from the || since the state becomes truthy. - Ty'rese */}

      { (state && <ArticlesCell criteria={state} />) || <ArticlesCell criteria={'business'} /> }


      {/* All instances of 'zip' have been changed to 'criteria'.
      This string will determine what articles are shown on the page.
      It can be parsed in articles.js to:
        (1) show articles based on categories from user settings
        (2) show articles based on search bar input
        (3) show articles from a category in the nav bar

      - Ty'rese
        */}

      {/* Pagination stuff */}

     <div className="rw-div">
        <Form>
        <div className="rw-button-group">
           <ButtonField name="previousPage" className="rw-button rw-button-blue" value="◄"/>


          <NumberField
                    name="pageTravel"
                    className="rw"
                    min="1"
                    max="100"

                  />

           <ButtonField name="nextPage" className="rw-button rw-button-blue" value="►"/>
           </div>
          </Form>
        </div>

    </>
  )
}

export default LandingPage
