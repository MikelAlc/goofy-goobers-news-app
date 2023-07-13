import { render, screen, fireEvent } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'
import LandingPage from './LandingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

const currentUser= {
  id: 1,
  name: 'Tester',
  general: true,
  business: false,
  entertainment: false,
  health: false,
  science: false,
  sports: false,
  technology: false,
}

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

  it('displays page', async () => {
    render(<LandingPage />)
    expect(screen.getByText('Page 1')).toBeInTheDocument()
    })

  it('displays search results correctly', async () => {
    render(<LandingPage />)

    // Find the search input field
    const submitButton = screen.getByRole('button', {name: 'Search' })

    // Type a search query

    //Click the search button
    fireEvent.click(submitButton);




  })

  it('has settings tab when logged in', async () => {
    const currentUser= {
          id: 1,
          name: 'Tester',
          general: true,
          business: false,
          entertainment: false,
          health: false,
          science: false,
          sports: false,
          technology: false,
        }

        mockCurrentUser(currentUser)

        render(<LandingPage />)
        expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('has no settings tab when logged out', async () => {
    mockCurrentUser(null)
    render(<LandingPage />)
    expect(screen.queryByText('Settings')).not.toBeInTheDocument()
  })

  it('has settings tab when logged in', async () => {
    const currentUser= {
          id: 1,
          name: 'Tester',
          general: true,
          business: false,
          entertainment: false,
          health: false,
          science: false,
          sports: false,
          technology: false,
        }

        mockCurrentUser(currentUser)

        render(<LandingPage />)
        expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('has general', async () => {
    mockCurrentUser(currentUser)
    render(<LandingPage />)
    expect(screen.getByText('General')).toBeInTheDocument()
})

it('has business', async () => {
mockCurrentUser(currentUser)
render(<LandingPage />)
expect(screen.getByText('Business')).toBeInTheDocument()
})

it('has entertainment', async () => {
mockCurrentUser(currentUser)
render(<LandingPage />)
expect(screen.getByText('Entertainment')).toBeInTheDocument()
})

it('has health', async () => {
mockCurrentUser(currentUser)
render(<LandingPage />)
expect(screen.getByText('Health')).toBeInTheDocument()
})
it('has science', async () => {
mockCurrentUser(currentUser)
render(<LandingPage />)
expect(screen.getByText('Science')).toBeInTheDocument()
})
it('has sports', async () => {
mockCurrentUser(currentUser)
render(<LandingPage />)
expect(screen.getByText('Sports')).toBeInTheDocument()
})
it('has general', async () => {
mockCurrentUser(currentUser)
render(<LandingPage />)
expect(screen.getByText('Technology')).toBeInTheDocument()
})

it('has search', async () => {
  mockCurrentUser(currentUser)
  render(<LandingPage />)
  expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
