import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Ping from './components/ping'
import Echo from './components/echo'
import './App.css';
import { Poll,Vote } from "./components/pollplus.js"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function PollPlus() {
    return (
        <Router>
            <div>
               <Link to="/">PollPlus</Link> | <Link to="/poll">Host Poll</Link>
                 | <Link to="/vote">Vote</Link>
                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/poll">
                        <Poll />
                    </Route>
                    <Route path="/vote">
                        <Vote />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div className="App">
            <h1>PollPlus</h1>
            <p>Welcome to PollPlus.</p>
            <p><Ping/></p>
            <p><Echo/></p>
            <p><small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small></p>
            <a href="/poll">Create Poll</a>
        </div>
    );
}

