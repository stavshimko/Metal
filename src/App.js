import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

/*
    css
*/
import './App.css';
import "./Components/Footer/footer.css";
import "./Components/Header/header.css";
import "./Pages/AboutMe/aboutMe.css";
import "./Pages/Catalog/Catalog.css";
import "./Pages/Calc/calc.css";
import "./Components/Home/Home.css";
/*
    objects
*/
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Catalog from "./Pages/Catalog/Catalog";
import Calc from "./Pages/Calc/calc";
import Home from "./Components/Home/Home";

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

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render () {
        // console.log(this.state.name)
        return (
            <div className="App">
                {/*<button onClick={this.ClickMe}>Click Me</button>*/}
                {/*Hello World! It's TZVAIG 2 <span className="name"> {this.state.name} </span>*/}
                <Router>
                    <Header toTop={this.scrollToTop}/>

                    <Element name="/" >
                        <Home/>
                    </Element>
                    <Element name="/calc">
                        <Calc/>
                    </Element>
                    <Element name="/catalog" >
                        <Catalog/>
                    </Element>
                    <Element name="/about" >
                        <AboutMe/>
                    </Element>
                    <Link onClick={this.scrollToTop}>To the top!</Link>
                </Router>
                <Footer/>
            </div>

        );
    }
}

