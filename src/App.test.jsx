import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

test('renders hello world text', () => {
  render(<App />)
  expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
})
