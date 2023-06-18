import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useState } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import { Form, TextField, Submit } from '@redwoodjs/forms'

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ea1d97965ac4d75a9ba09b29075cc1c')
  //   .then(response => response.json())
  //   .then(json => console.info(json))

  const [zip, setZip] = useState()

  const onSubmit = () => {
    let dateNow = new Date()
    setZip(dateNow.toUTCString())
  }

  return (
    <>
      <MetaTags title="Landing" description="Landing page" />


      {/* <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField name="zip" />
        <Submit>Go</Submit>
      </Form> */}

      <button onClick={onSubmit}>hi</button>
      {zip && <ArticlesCell zip={zip} />}

      {/* <ArticlesCell zip={'07079'} /> */}

    </>
  )
}

export default LandingPage
