import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }

  render() {
    return (
      <div>
      <h1>About</h1>
      <div>
          <UserClass name={'Siddhant'} location={'Jabalpur'} />
      </div>
      </div>
  )
  }
}

// const About = () => {
//   return (
//       <div>
//       <h1>About</h1>
//       <div>
//         <UserClass name = {'Siddhant'} location = {'Jabalpur'} />
//       </div>
//       </div>
//   )
// }

export default About