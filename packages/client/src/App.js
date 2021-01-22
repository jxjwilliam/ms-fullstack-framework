import React, { useState, useEffect } from 'react'
import { isEmpty } from '@ms-fullstack/lib'

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    if (isEmpty(message)) {
      console.log('current the message is null, fetching...')
    }
    try {
      fetch('/message')
        .then(data => data.json())
        .then(data => setMessage(data.msg))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  )
}

export default App
