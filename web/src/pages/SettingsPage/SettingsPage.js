import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  Label,
  Submit,
  CheckboxField
} from '@redwoodjs/forms'
const SettingsPage = () => {


  const onSubmit = async (data) => {


  }


  return (
    <>
      <MetaTags title="Settings" description="Settings page" />
    <main className="rw-main">
    <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Settings</h2>
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
