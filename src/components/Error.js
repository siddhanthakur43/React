import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
      <div>
          <h1>Oops!!</h1>
          <h3>Something went wrong</h3>
          <h3>{err.status} : {err.statusText}</h3>
          <h3>{err.data}</h3>
    </div>
  )
}

export default Error