import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { Header, Footer } from './components'
import { Github, Walmart, AliExpress } from './containers'

function Routers() {
  return (
    <Switch>
      <Route path="/" component={Github} exact />
      <Route path="/walmart" component={Walmart} />
      <Route path="/ali-express" component={AliExpress} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  )
}

export default App
