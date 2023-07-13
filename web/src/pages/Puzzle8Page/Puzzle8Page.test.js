import { render } from '@redwoodjs/testing/web'

import Puzzle8Page from './Puzzle8Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Puzzle8Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Puzzle8Page />)
    }).not.toThrow()
  })
})
