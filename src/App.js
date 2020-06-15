import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        }
    }

    ClickMe = () => {
        this.setState({
            name: "Stav"
         });
    }

    render () {
        // console.log(this.state.name)
        return (
            <div className="App">
                <button onClick={this.ClickMe}>Click Me</button>
                Hello World! It's TZVAIG 2 <span className="name"> {this.state.name} </span>
            </div>
        );
    }
}

