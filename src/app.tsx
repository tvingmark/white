import { h, Fragment } from 'preact'
import { Logo } from './logo'

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Emilio!</p>
      <p>
        <a
          className="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
