import { render, screen, waitFor,  } from '@redwoodjs/testing/web'
import SignupPage from './SignupPage'
import userEvent from '@testing-library/user-event'

describe('SignupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignupPage />)
    }).not.toThrow()
  })
  it('has a signup form', () => {
    render(<SignupPage />)
    const usernameLabel = screen.getByText('Username')
    expect(usernameLabel).toBeInTheDocument()

    const passwordLabel = screen.getByText('Password')
    expect(passwordLabel).toBeInTheDocument()

    const confirmPasswordLabel = screen.getByText('Confirm Password')
    expect(confirmPasswordLabel).toBeInTheDocument()

  }
  )
  it('does not submit a form when required fields are missing', async () => {
    const onSubmit = jest.fn()
    render(<SignupPage onSubmit={onSubmit} />)

    const submitButton = screen.getByText('Sign Up')

    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).not.toHaveBeenCalled()
  })
})
