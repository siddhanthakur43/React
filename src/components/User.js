import React, { useState } from 'react'

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className='user-info'>
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <h1>Name: { props.name}</h1>
      <h3>Location: { props.location}</h3>
          <h3>Contact: siddhantthakur43@gmail.com</h3>
      </div>
  )
}

export default User;