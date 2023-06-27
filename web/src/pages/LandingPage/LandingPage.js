import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useState } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import logo from 'web/public/img/pub_logos.png'
import { Form, TextField, Submit } from '@redwoodjs/forms'



const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const [state, changeState] = useState()

  const setCategory = (event) => { // switch category, select proper tab
    const categories = document.getElementsByClassName('categories')

    for (let i=0; i<categories.length; i++) // reset all links to white
      categories[i].style.color = 'white'
    event.target.style.color = '#fa9dec' // set clicked clicked to pink

    changeState(event.target.id) // the state will be the category itself, except 'home'
  }


  return (
    <>

      <header>
        <div className="title">
            <Link to={routes.landing()}><img id='logo' src={logo} alt="Goofy Goober Logo"></img></Link>
        </div>
         <div className='form-container'>
          <div>
            <Form className='form-inline'>
              <TextField name="input" className='text-field'/>
              <Submit  className='rw-button rw-button-blue'>Search</Submit>
           </Form>
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

        </div>
        <nav>
          <ul>
            <li>
              <Link id='home' style={{color: '#fa9dec'}} className='categories'>Home</Link>
            </li>
            <li>
              <Link id='general' className='categories'  onClick={setCategory}>General</Link>
            </li>
            <li>
                <Link id='business' className='categories'  onClick={setCategory}>Business</Link>
            </li>
            <li>
                <Link id='entertainment' onClick={setCategory}>Entertainment</Link>
            </li>
            <li>
                <Link id='health' className='categories' onClick={setCategory}>Health</Link>
            </li>
            <li>
                <Link id='science' className='categories' onClick={setCategory}>Science</Link>
            </li>
            <li>
                <Link id='sports' className='categories'  onClick={setCategory}>Sports</Link>
            </li>
            <li>
                <Link id='technology' className='categories' onClick={setCategory}>Technology</Link>
            </li>
            <li>
              {isAuthenticated? <Link to={routes.settings()}>Settings</Link>:<></>}
            </li>
          </ul>
        </nav>
      </header>


      <MetaTags title="Landing" description="Landing page" />

      {/* When the page initially loads, state is falsy, therefore the && will not
          return a cell. By adding an || and a second operand, the cell will load initially.
          Any subsequent changes to the state will cause the first operand
          to be returned from the || since the state becomes truthy. - Ty'rese */}

      { (state && <ArticlesCell criteria={state} />) || <ArticlesCell criteria={'general'} /> }


      {/* All instances of 'zip' have been changed to 'criteria'.
      This string will determine what articles are shown on the page.
      It can be parsed in articles.js to:
        (1) show articles based on categories from user settings
        (2) show articles based on search bar input
        (3) show articles from a category in the nav bar

      - Ty'rese
        */}




    </>
  )
}

export default LandingPage
