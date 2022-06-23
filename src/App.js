import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import EventDetail from "./_pages/EventDetail";
import Home from "./_pages/Home";

export default function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/events/:id">
                    <EventDetail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}
