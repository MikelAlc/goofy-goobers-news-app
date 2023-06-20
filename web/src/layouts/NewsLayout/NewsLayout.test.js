import { render, screen } from '@redwoodjs/testing/web'

import NewsLayout from './NewsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts


describe('NewsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsLayout />)
    }).not.toThrow()
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

        render(<NewsLayout />)
        expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('has no settings tab when logged out', async () => {
    mockCurrentUser(null)
    render(<NewsLayout />)
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

        render(<NewsLayout />)
        expect(screen.getByText('Settings')).toBeInTheDocument()
  })




})
