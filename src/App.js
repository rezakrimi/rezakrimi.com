import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/myNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404"

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error404} />
            </Switch>
        </Router>
    );
}

export default App;
