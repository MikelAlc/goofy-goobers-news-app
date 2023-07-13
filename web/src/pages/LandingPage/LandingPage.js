import { useState } from 'react'

import logo from 'web/public/img/pub_logos.png'

import { Label, NumberField, ButtonField, Form, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'


import { useAuth } from 'src/auth'
import ArticlesCell from 'src/components/ArticlesCell'

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [state, changeState] = useState()
  const [pstate, pchangeState] = useState(1)

  const onSubmit = (data) => {
    const hasEvenParentheses = /^([^()]*\([^()]*\))*[^()]*$/.test(input)
    if (!hasEvenParentheses) {
      console.log('Invalid Request')
      return
    }
    console.log(data)
    changeState(data.input)
  }

  const setCategory = (event) => {
    // switch category, select proper tab
    const categories = document.getElementsByClassName('categories')

    for (
      let i = 0;
      i < categories.length;
      i++ // reset all links to white
    )
      categories[i].style.color = 'white'
    event.target.style.color = '#fa9dec' // set clicked clicked to pink

    changeState(event.target.id) // the state will be the category itself, except 'home'

    //need to reset page between categories - Josh
    pchangeState(1);
  }
  const setPage = (event) => { //change pages

    if( event.target.id=="previous" && parseInt(pstate) > 1){
      pchangeState(parseInt(pstate) - 1);
      console.log(pstate);
    }


    if( event.target.id=="next" && parseInt(pstate) < 99){
      pchangeState(parseInt(pstate) + 1);
      console.log(pstate);
    }

    //manual page entry on 'ENTER'
    if( event.target.id=="manualInput" && event.keyCode == 13 && event.target.value>0 && event.target.value<101) {
      pchangeState(event.target.value);
      console.log(pstate);
  }
}

  // return string of categories from settings
  // used to load preferences initially when page loads
  const getUserPrefs = () => {
    let prefs = ''

    for (const prop in currentUser) {
      if (typeof currentUser[prop] === 'boolean' && currentUser[prop])
        prefs += prop + '/'
    }

    //if(prefs.length==0) return "general"
    return prefs
  }

  const setUserPrefs = (event) => {
    // for home button
    const categories = document.getElementsByClassName('categories')

    for (
      let i = 0;
      i < categories.length;
      i++ // reset all links to white
    )
      categories[i].style.color = 'white'
    event.target.style.color = '#fa9dec' // set clicked clicked to pink

    if (isAuthenticated) changeState(getUserPrefs())
    else changeState(null)
  }

  const userPreferences = getUserPrefs()

  return (
    <>
      <header>
        <div className="title">
          <Link to={routes.landing()}>
            <img id="logo" src={logo} alt="Goofy Goober Logo"></img>
          </Link>
        </div>
        <div className="form-container">
          <div>
            <Form className="form-inline" onSubmit={onSubmit}>
              <TextField name="input" className="text-field" />
              <Submit className="rw-button rw-button-blue">Search</Submit>
            </Form>
          </div>
          <div className="flex-end">
            {isAuthenticated ? (
              <div className="flex-end">
                <span>Logged in as {currentUser.name}&nbsp;</span>{' '}
                <button
                  type="button"
                  onClick={logOut}
                  className="rw-button rw-button-blue"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()} className="rw-button rw-button-blue">
                Login
              </Link>
            )}
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                id="home"
                style={{ color: '#fa9dec' }}
                onClick={setUserPrefs}
                className="categories"
              >
                Home
              </Link>
            </li>
            <li>
              <Link id="general" className="categories" onClick={setCategory}>
                General
              </Link>
            </li>
            <li>
              <Link id="business" className="categories" onClick={setCategory}>
                Business
              </Link>
            </li>
            <li>
              <Link
                id="entertainment"
                className="categories"
                onClick={setCategory}
              >
                Entertainment
              </Link>
            </li>
            <li>
              <Link id="health" className="categories" onClick={setCategory}>
                Health
              </Link>
            </li>
            <li>
              <Link id="science" className="categories" onClick={setCategory}>
                Science
              </Link>
            </li>
            <li>
              <Link id="sports" className="categories" onClick={setCategory}>
                Sports
              </Link>
            </li>
            <li>
              <Link
                id="technology"
                className="categories"
                onClick={setCategory}
              >
                Technology
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link to={routes.settings()}>Settings</Link>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <MetaTags title="Landing" description="Landing page" />

      {/* When the page initially loads, state is falsy, therefore the && will not
          return a cell. By adding an || and a second operand, the cell will initially load
          articles based on user preferences . Any subsequent changes to the state will cause
          the first operand to be returned from the || since the state becomes truthy.

          - Ty'rese */}


      {/*<p>{getUserPrefs()}</p>*/}


      {!state && !isAuthenticated ? (
        <div>
          <h2 className="rw-heading rw-heading-secondary">
            Log in for a custom home feed{' '}
          </h2>

          <img src="img/PA.jpeg" alt="Pugs" width="300px" />
        </div>
      ) : (
        (state && <ArticlesCell criteria={state} pageNumber={parseInt(pstate)}/>) || (
          <ArticlesCell criteria={getUserPrefs()} pageNumber={parseInt(pstate)} />
        )
      )}

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
      <span><b>Page {pstate}</b></span>
        <Form>
        <div className="rw-button-group">
          <ButtonField id = "previous" name="previousPage" className="rw-button rw-button-blue" value="BACK" onClick={setPage}/>


          <NumberField
                    id = "manualInput"
                    name="pageTravel"
                    className="rw"
                    min="1"
                    max="100"
                    onKeyDown={setPage}
                    placeholder={pstate}

                  />

           <ButtonField id = "next" name="nextPage" className="rw-button rw-button-blue" value="NEXT" onClick={setPage}/>
           </div>
          </Form>
        </div>


    </>
  )
}

export default LandingPage
