import { render as RTLrender } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

export function render(ui: React.ReactElement) {
  const user = userEvent.setup()

  return {
    user,
    ...RTLrender(ui),
  }
}
