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



const UPDATE_CATEGORIES = gql`
  mutation UpdateCategoriesMutation($id: Int!, $input: UpdateCategories!) {
    updateCategories(id: $id, input: $input) {
      id
    }
  }
`

const SettingsPage = () => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  const [update] = useMutation(UPDATE_CATEGORIES)

  const onSubmit = async (data) => {
    console.log(data);
    console.log(currentUser.id);
    //selection detection
    for (const property in data){
      console.log(`${property}: ${data[property]}`);
      if (data[property] == true){
        update({variables:{id:currentUser.id, input: data}});
        location.reload();
        //would be nice to play a short animation saying settings applied or displat a window for 2 seconds saying applied now redirecting
        window.location.href = routes.landing();
      }
    }

  }



  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

    <main className="rw-main">

    <div>


    </div>
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
                  <CheckboxField
                    name="general"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.general}
                    />
                      General
                  </Label>

                  <Label
                    name="business"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                  <CheckboxField
                    name="business"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.business}
                    />
                      Business
                  </Label>

                  <Label
                    name="entertainment"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                  <CheckboxField
                    name="entertainment"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.entertainment}
                    />
                      Entertainment
                  </Label>

                  <Label
                    name="health"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                  <CheckboxField
                    name="health"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.health}
                    />
                      Health
                  </Label>

                  <Label
                    name="science"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                  <CheckboxField
                    name="science"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.science}
                    />
                      Science
                  </Label>

                  <Label
                    name="sports"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                  <CheckboxField
                    name="sports"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.sports}
                    />
                      Sports
                  </Label>

                  <Label
                    name="technology"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    >
                  <CheckboxField
                    name="technology"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    defaultChecked={currentUser.technology}
                    />
                      Technology
                  </Label>

                  <div className = "rw-label"><strong>AT LEAST ONE SELECTION IS REQUIRED. You will be redirected to your home page upon success or cancellation.</strong></div>
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
