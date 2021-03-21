import React from 'react'
import { Link } from 'react-router-dom'

function Navbars() {
  return (
    <nav>
      <Link to="/" className="nav">
        Github
      </Link>
      <Link to="/walmart" className="nav">
        Walmart
      </Link>
      <Link to="/ali-express" className="nav">
        Ali-Express
      </Link>
    </nav>
  )
}

export default function () {
  return (
    <header className="App-header">
      <h4>Miroservices Full-Stack Monorepo</h4>
      <Navbars />
    </header>
  )
}
