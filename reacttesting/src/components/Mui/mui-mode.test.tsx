// import { render, screen } from '@testing-library/react'
import { render, screen } from '../../test-utils'
import { AppProvider } from '../Providers/app-providers'
import { MuiMode } from './mui-mode'

describe('Mui Mode', () => {

  test('render text correctly', () => {

    render(<MuiMode />)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})