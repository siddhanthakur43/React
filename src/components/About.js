import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props) {
    super(props)
    console.log('Parent Constructor');
  }
  componentDidMount() {
    console.log('Parent componentDidMount');
  }

  render() {
    console.log('Parent Render');
    return (
      <div>
      <h1>About</h1>
      <div>
          <UserClass name={'Siddhant'} location={'Jabalpur'} />
          <UserClass name = {'Elon'} location = {'NewYork'} />
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