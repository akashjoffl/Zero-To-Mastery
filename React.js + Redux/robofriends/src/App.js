import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { render } from 'react-dom';
import './App.css';
import { robots } from './robots';
import Scroll from './Scroll';

class App extends Component {
    constructor() {
        super() // weird thing to add here for constructor before this. 
        this.state = { // state describes the app which can change; so we call it as SMART component
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() { // getting JSON Data from URL
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>  response.json())
        .then(users =>this.setState({ robots: users})); // try changing users to [] for loading
        
    } 

    onSearchChange = (event) => { // anytime comes from React (onstructor, rendor) making method use arrow functions #weirdReact  
        this.setState( { searchfield: event.target.value })
        
    }
    render() {
        const filteredRobots = this .state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {

        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                <CardList robots={filteredRobots} // weird react syntax (this.state) robot passed down as props
                /> 
                </Scroll>
                
            </div>
            );
        }
    }
};


export default App;