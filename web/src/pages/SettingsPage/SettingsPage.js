import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  Label,
  Submit,
  CheckboxField,
  CheckboxFieldProps
} from '@redwoodjs/forms'
//import { db } from 'api/db'
import { useAuth } from 'src/auth'
import {updateUser} from 'src/graphql/users'

const SettingsPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  //check boxes of current settings here?

  const onSubmit = async (data) => {
    console.log(data);
    console.log(currentUser.id);

    if (data.general==true)
    updateUser({
      id: currentUser.id,
      input: { general: true },
    })
    else
    updateUser({
      id: currentUser.id,
      input: { general: false },
    })
    if (data.business==true)
      currentUser.business=true;
    else
      currentUser.business=false;
    if (data.entertainment==true)
      currentUser.entertainment=true;
    else
      currentUser.entertainment=false;
    if (data.health==true)
      currentUser.health=true;
    else
      currentUser.health=false;
   if (data.sports==true)
      currentUser.sports=true;
    else
      currentUser.sports=false;
    if (data.science==true)
      currentUser.science=true;
    else
      currentUser.science=false;
    if (data.technology==true)
      currentUser.technology=true;
    else
      currentUser.technology=false;

  }


  return (
    <>
      <MetaTags title="Settings" description="Settings page" />
    <main className="rw-main">
    <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Select Your Interests</h2>
              <p className="rw-paragraph">These categories will be applied to your custom feed</p>
            </header>

        <div className="rw-segment-main">
             <div className="rw-form-wrapper">
               <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="general"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      General
                  </Label>

                  <CheckboxField
                    name="general"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"

                  />

                  <Label
                    name="business"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Business
                  </Label>

                  <CheckboxField
                    name="business"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />

                  <Label
                    name="entertainment"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Entertainment
                  </Label>

                  <CheckboxField
                    name="entertainment"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />

                  <Label
                    name="health"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Health
                  </Label>

                  <CheckboxField
                    name="health"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />

                  <Label
                    name="science"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Science
                  </Label>

                  <CheckboxField
                    name="science"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />

                  <Label
                    name="sports"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Sports
                  </Label>

                  <CheckboxField
                    name="sports"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />

                  <Label
                    name="technology"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                      Technology
                  </Label>

                  <CheckboxField
                    name="technology"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                  />



                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Apply</Submit>
                  </div>
                </Form>
               </div>
            </div>
          </div>
        </main>
        </>
  )
}

export default SettingsPage
