import { screen } from '@testing-library/react'

import App from './App'
import { render } from './shared/utils'

describe('App', () => {
  it('renders without crashing', async () => {
    const { user } = render(<App />)

    await screen.findByText('0')

    const button = await screen.findByRole('button', { name: 'App' })

    await user.click(button)

    await screen.findByText('0')
    await screen.findByText('1')
  })
})
