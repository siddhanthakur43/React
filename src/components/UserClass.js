import { Component } from "react";

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
            name: 'dummy Name',
            location: 'dummy location',
            avatar_url: 'avatar_url'}
        }
        console.log('constructor');
    }
    async componentDidMount() {
        console.log('componentDidMount');
        const data = await fetch('https://api.github.com/users/siddhanthakur43');
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');

    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        console.log('render');
        return (
            <div className='user-info'>
                <h1>Name: {name}</h1>
                <h3>Location: {location}</h3>
                <img src={avatar_url}></img>
                <h3>Contact: siddhantthakur43@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass;

/*
Mounting Cycle:-
contructor(dummy data)
render(dummy data)
<html dummy data>
componentDidMount
Api call
this.setState(Api data)

Update Cycle:-
render(API Data)
<html api data>
ComponentDidUpdate
*/