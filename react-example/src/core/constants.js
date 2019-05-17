import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../../components/content/home/index";
import About from "../../components/content/about/index";
import Topics from "../../components/content/topics/index";

class Header extends React.Component{
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default Header;