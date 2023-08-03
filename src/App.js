/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/home-page';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import NavigationLink from './navigation-link';
import { connect } from 'react-redux';
import { startAction } from './actions/startAction';
import { stopAction } from './actions/stopAction.js';

function App(props) {
  const [user, setUser] = useState(null);
  // var user;
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token : "+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject.name);
  }
  useEffect(() => {
    /* Global Google */
    google.accounts.id.initialize({
      client_id:"251114571842-6p690t3tnudtmmqht91285gp50s7k0tn.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    );
  }, []) 
  const stopRotation = () => {
    if(props.rotating)
      return props.stopAction;
    else
      return props.startAction;
  }
  return (
    <header onClick={stopRotation()}>
        {user && <NavigationLink></NavigationLink>}
        <p className={'App-logo' + (props.rotating? "" : " App-logo-paused")}>
          Welcome to Ajay Ji's
        </p>
        {!user && <div id="signInDiv"></div>}
        Hello - {user}
        {user && <Link to="/">Sign Out</Link>}
        {user && <HomePage></HomePage>}
    </header>
   
 

  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
