import { render } from '@redwoodjs/testing/web'

import SettingsPage from './SettingsPage'
import { flattenSearchParams } from '@redwoodjs/router/dist/util'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingsPage', () => {
  it('renders successfully', async () => {

    mockGraphQLQuery('getCurrentUser', () => {
      return {
        currentUser: {
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
      }
    })

    expect(() => {
      render(await <SettingsPage />)
    }).not.toThrow()
  })
})
