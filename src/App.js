import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Home from "./_pages/Home";

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                {/* <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <Users />
                </Route> */}
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
