import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log( this.props.name,'child constructor');
    }
    componentDidMount() {
        console.log(this.props.name, 'child componentDidMount');
    }
    render() {
        console.log(this.props.name, 'child render');
        const { name, location } = this.props;
        const { count } = this.state;
        return (<div className='user-info'>
            <h1>Count = {count}</h1>
            <button onClick={() => {
                this.setState({
                    count:this.state.count + 1
                })
            }}>Inc Count</button>
            <button onClick={() => {
                this.setState({
                    count: this.state.count - 1
                })
            }}>Dec Count</button>
      <h1>Name: {name}</h1>
      <h3>Location: {location}</h3>
          <h3>Contact: siddhantthakur43@gmail.com</h3>
      </div>)
    }
}

export default UserClass