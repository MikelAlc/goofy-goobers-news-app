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

  var pageNum=1;

  const setCategory = (event) => { // switch category, select proper tab
    // event.target.style.color = '#fa9dec'
    changeState(event.target.id) // the state will be the category itself, except 'home'
  }
  const setPage = (event) => { //change pages

    if( event.target.id=="previous"){
      pageNum--;
      console.log(pageNum);
    }


    if( event.target.id=="next"){
      pageNum++;
      console.log(pageNum);
    }

    if( event.target.id=="manualInput"&&event.keyCode == 13) {
      pageNum=event.target.value;

      console.log(pageNum);
  }
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

      { (state && <ArticlesCell criteria={state} pageNumber={pageNum}/>) || <ArticlesCell criteria={'business'} /> }


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
           <ButtonField id = "previous" name="previousPage" className="rw-button rw-button-blue" value="◄" onClick={setPage}/>


          <NumberField
                    id = "manualInput"
                    name="pageTravel"
                    className="rw"
                    min="1"
                    max="100"
                    onKeyDown={setPage}

                  />

           <ButtonField id = "next" name="nextPage" className="rw-button rw-button-blue" value="►" onClick={setPage}/>
           </div>
          </Form>
        </div>

    </>
  )
}

export default LandingPage
