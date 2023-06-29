import { render, screen, fireEvent } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'
import LandingPage from './LandingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LandingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPage />)
    }).not.toThrow()
  })

  it('Has refresh button',  () => {
    render(<LandingPage />)
    expect(screen.getByRole('button', {id: "refresh-button"})).toBeInTheDocument()

  })

  it('displays search results correctly', async () => {
    render(<LandingPage />)

    // Find the search input field
    const submitButton = screen.getByRole('button', {name: 'Search' })

    // Type a search query

    //Click the search button
    fireEvent.click(submitButton);




  })
})
