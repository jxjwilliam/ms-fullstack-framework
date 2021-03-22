import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/ca.png'

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
      <Link to="/help" className="nav">
        Help
      </Link>
    </nav>
  )
}

export default function () {
  return (
    <header className="App-header">
      <div>
        <h4>Miroservices Full-Stack Monorepo</h4>
        <img src={logo} width="36px" height="20px" alt="ca flag" className="flag" />
      </div>
      <Navbars />
    </header>
  )
}
