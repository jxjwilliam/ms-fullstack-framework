import React, { useState, useEffect } from 'react'
import { isEmpty } from '@ms-fullstack/lib'

export default function () {
  const [message, setMessage] = useState()
  useEffect(() => {
    if (isEmpty(message)) {
      console.log('current message is null, fetching...')
    }
    try {
      fetch('/api/message')
        .then(data => data.json())
        .then(data => setMessage(data.msg))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <footer>
      <p>{message}</p>
    </footer>
  )
}
