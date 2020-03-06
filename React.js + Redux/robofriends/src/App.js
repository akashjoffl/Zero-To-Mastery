import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import { render } from 'react-dom';

class App extends Component {
    constructor() {
        super() // weird thing to add here for constructor before this. 
        this.state = { // state describes the app which can change 
            robots: robots,
            searchfield: ""
        }
    }

    onSearchChange(event) {
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                <CardList robots={this.state.robots} // weird react syntax (this.state) robot passed down as props
                /> 
            </div>
        );
    }
 };


export default App;
// fixes yay