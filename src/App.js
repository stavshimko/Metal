import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';
import "./Components/Footer/footer.css";
import "./Components/Header/header.css";

import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";


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
                {/*<button onClick={this.ClickMe}>Click Me</button>*/}
                {/*Hello World! It's TZVAIG 2 <span className="name"> {this.state.name} </span>*/}
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/about">
                            {/*<AboutMe/>*/}
                        </Route>
                        <Route path="/calc">
                        </Route>
                        <Route path="/catalog">
                        </Route>
                        <Route path="/">
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>

        );
    }
}

