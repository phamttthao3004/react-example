import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Topic from "../content/topic/index";

// function Topic({ match }) {
//   return <h3>Requested Param: {match.params.id}</h3>;
// }
class Topics extends React.Component{
  render(){
    return (
      <div>
        <h2>Topics</h2>
  
        {/* <ul>
          <li>
            <Link to="topic/components">Components</Link>
          </li>
          <li>
            <Link to="topic/props-v-state">Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:id`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        /> */}
      </div>
    );
  }
}

export default Topics;