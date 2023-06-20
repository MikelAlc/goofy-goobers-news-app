import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  Form,
  Label,
  Submit,
  CheckboxField,
  CheckboxFieldProps
} from '@redwoodjs/forms'
//import { db } from 'src/lib/db'
import { useAuth } from 'src/auth'
//import { users, user, createUser, updateUser, deleteUser } from 'src/services/users/users.js'

const SettingsPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  /*if (data.general==true)
    updateUser({
      id: currentUser.id,
      input: { general: true },
    })
    else
    updateUser({
      id: currentUser.id,
      input: { general: false },
    })
*/
/*
var selectionMade = false;
if (data.general==true)
  selectionMade = true;

if (data.business==true)
  selectionMade = true;

if (data.entertainment==true)
  selectionMade = true;

if (data.health==true)
  selectionMade = true;

if (data.sports==true)
  selectionMade = true;

if (data.science==true)
  selectionMade = true;

if (data.technology==true)
  selectionMade = true;

if (selectionMade==false){
  // display must select one message
}
*/
  const onSubmit = async (data) => {
    console.log(data);
    console.log(currentUser.id);
    var selectionMade = false;
if (data.general==true)
  selectionMade = true;

if (data.business==true)
  selectionMade = true;

if (data.entertainment==true)
  selectionMade = true;

if (data.health==true)
  selectionMade = true;

if (data.sports==true)
  selectionMade = true;

if (data.science==true)
  selectionMade = true;

if (data.technology==true)
  selectionMade = true;

if (selectionMade==false){
  // display must select one message
}
    if (data.general==true){
      selectionMade = true;
      currentUser.general=true;
    }
    else if(selectionMade==true){
      currentUser.general=false;
      console.log("no more general");
    }

    if (data.business==true){
      selectionMade = true;
      currentUser.business=true;}
    else if(selectionMade==true)
      currentUser.business=false;
    if (data.entertainment==true){
      selectionMade = true;
      currentUser.entertainment=true;}
    else if(selectionMade==true)
      currentUser.entertainment=false;
    if (data.health==true){
      selectionMade = true;
      currentUser.health=true;}
    else if(selectionMade==true)
      currentUser.health=false;
   if (data.sports==true){
      selectionMade = true;
      currentUser.sports=true;}
    else if(selectionMade==true)
      currentUser.sports=false;
    if (data.science==true){
      selectionMade = true;
      currentUser.science=true;}
    else if(selectionMade==true)
      currentUser.science=false;
    if (data.technology==true){
      selectionMade = true;
      currentUser.technology=true;}
    else if(selectionMade==true)
      currentUser.technology=false;

    if (selectionMade==true){
      window.location.href = routes.landing()
    }

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

                  <div>AT LEAST ONE SELECTION IS REQUIRED, YOU WILL BE REDIRECTED TO YOUR HOME PAGE UPON SUCCESS</div>

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Apply</Submit>
                    <Link to={routes.landing()} className="rw-button rw-button-red">CANCEL</Link>
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
