import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  useForm,
   Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'



const SignupPage = () => {
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
     // navigate(routes.landing())
     window.location.href = routes.landing()
    }
  }, [isAuthenticated, confirmPassword])

  // focus on username box on page load
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])
const formMethods = useForm({
   onSubmit: async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    const response = await signUp({
      username: data.username,
      password: data.password,

    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      window.location.href = routes.landing() // go to landing page
      toast.success('Welcome!')
    }
  }
})

const { handleSubmit } = formMethods;
  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={handleSubmit} className="rw-form-wrapper" formMethods={formMethods}>
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}

                    validation={{
                      required: 'username is required',

                      minLength: {
                        value: 8,
                        message: 'Username must be at least 8 characters',
                      },
                      pattern: {
                        value: /^[^\s]+$/,//no spaces
                        message: 'Username cannot contain spaces',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    validation={{
                      required: 'Password is required',

                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])/,
                        message: 'Password must contain at least one lowercase letter, one uppercase letter, one non-letter',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />
                  <Label
                    name="confirmPassword"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >

                    Confirm Password
                   </Label>

                   <PasswordField
                      name="confirmPassword"
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      autoComplete="new-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      validation={{
                        required:'Confirm Password is required',

                        validate: {
                          matchesPreviousPassword: (value) => {
                            if (value === confirmPassword) {
                              return true
                            }
                            return 'Passwords do not match!'
                          }
                        },
                      }}
                        />
                   <FieldError
                    name="confirmPassword"
                    className="rw-field-error"
                  />
                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>

                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
