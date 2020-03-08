import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';


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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return !robots.length ?
            <h1>Loading...</h1>:
            (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                    <ErrorBoundry>
                <CardList robots={filteredRobots} // weird react syntax (this.state) robot passed down as props
                />
                </ErrorBoundry>  
                </Scroll>
                <Footer />
            </div>
            );
        }   
};


export default App;