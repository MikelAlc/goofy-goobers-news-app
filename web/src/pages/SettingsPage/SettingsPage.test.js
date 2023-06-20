import { render,screen } from '@redwoodjs/testing/web'

import SettingsPage from './SettingsPage'
import { flattenSearchParams } from '@redwoodjs/router/dist/util'

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

describe('SettingsPage', () => {
  it('renders successfully', async () => {


        mockCurrentUser(currentUser)

    expect(() => {
      render( <SettingsPage />)
    }).not.toThrow()
  })

  it('has general', async () => {
        mockCurrentUser(currentUser)
        render(<SettingsPage />)
        expect(screen.getByText('General')).toBeInTheDocument()
  })

  it('has business', async () => {
    mockCurrentUser(currentUser)
    render(<SettingsPage />)
    expect(screen.getByText('Business')).toBeInTheDocument()
})

it('has entertainment', async () => {
  mockCurrentUser(currentUser)
  render(<SettingsPage />)
  expect(screen.getByText('Entertainment')).toBeInTheDocument()
})

it('has health', async () => {
  mockCurrentUser(currentUser)
  render(<SettingsPage />)
  expect(screen.getByText('Health')).toBeInTheDocument()
})
it('has science', async () => {
  mockCurrentUser(currentUser)
  render(<SettingsPage />)
  expect(screen.getByText('Science')).toBeInTheDocument()
})
it('has sports', async () => {
  mockCurrentUser(currentUser)
  render(<SettingsPage />)
  expect(screen.getByText('Sports')).toBeInTheDocument()
})
it('has general', async () => {
  mockCurrentUser(currentUser)
  render(<SettingsPage />)
  expect(screen.getByText('Technology')).toBeInTheDocument()
})

})
