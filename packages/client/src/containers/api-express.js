import React, { useState, useEffect } from 'react'

export default function () {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('/rapidapi/ali-express/categories')
      .then(ret => ret.json())
      .then(data => setData(data))
      .catch(console.error)
  })

  return <>{JSON.stringify(data, null, 2)}</>
}
