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
import { toast, Toaster } from '@redwoodjs/web/toast'


const UPDATE_CATEGORIES = gql`
  mutation UpdateCategoriesMutation($id: Int!, $input: UpdateCategories!) {
    updateCategories(id: $id, input: $input) {
      id
    }
  }
`

const SettingsPage = () => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  const [update,{loading,error}] = useMutation(UPDATE_CATEGORIES, {onCompleted: () => { toast.success('Preferences Updated');}})




  const onSubmit = async (data) => {
    console.log(data);
    console.log(currentUser.id);
    let hasSelection = false; // Track if at least one category is selected

    // Selection detection
    for (const property in data) {
      console.log(`${property}: ${data[property]}`);
      if (data[property] === true) {
        hasSelection = true;
        break; // Exit the loop if at least one category is selected
      }
    }

    if (hasSelection) {
      update({ variables: { id: currentUser.id, input: data } });

      // Display success toast


      // Delay the page reload for 2 seconds (adjust the delay as needed)
      setTimeout(() => {
        location.reload();
        window.location.href = routes.landing();
      }, 1000);
    } else {
      // Display error toast only once if no categories are selected
      toast.error('At least one category is required');
    }
  }



  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

    <main className="rw-main">
    <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
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
                    <Link to={routes.landing()} className="rw-button rw-button-red">CANCEL</Link>
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
