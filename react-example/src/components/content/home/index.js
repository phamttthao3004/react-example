import React from "react";
import { connect } from 'react-redux';
import rootAction from '../../../actions/action';

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    startAction: () => dispatch(rootAction.start.startAction),
    stopAction: () => dispatch(rootAction.stop.stopAction)
});

class HomeConnected extends React.Component{
  constructor(){
    super();

    //events
  }

  render() {
    let logo = window.location + 'images/logo.png';
    return (
    <div>
      {this.props.rotating}
      <img 
    src={logo} 
    className={
      "App-logo" + 
      (this.props.rotating ? "":" App-logo-paused")
    } 
    alt="logo" 
    onClick={
      this.props.rotating ? 
        this.props.stopAction : this.props.startAction
    }
  /><h2>Home</h2>
  </div>
    );
  }
}
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeConnected);
export default Home;