import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Home from "./_pages/Home";

export default function App() {
    return (
        <Router>
            {/* <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav> */}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
            {/* </div> */}
        </Router>
    );
}
