import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'
import LoginPage  from './LoginPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoginPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPage />)
    }).not.toThrow()
  })
  it('has a login form', () => {
    render(<LoginPage />)
    const usernameLabel = screen.getByText('Username')
    expect(usernameLabel).toBeInTheDocument()

    const passwordLabel = screen.getByText('Password')
    expect(passwordLabel).toBeInTheDocument()

  }
  )
  it('does not submit a form when required fields are missing', async () => {
    const onSubmit = jest.fn()
    render(<LoginPage onSubmit={onSubmit} />)

    const submitButton = screen.getByRole('button', { name: 'Login' })

    await waitFor(() => userEvent.click(submitButton))

    expect(onSubmit).not.toHaveBeenCalled()
  }
  )

})
