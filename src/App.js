/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './components/home-page';
import { Link, Route, Routes } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import NavigationLink from './navigation-link';
import {decrementCounter, incrementCounter} from './redux/action';
import { useDispatch } from 'react-redux';
import Header from './components/header';
import AddRemoveCustomer from './components/add-remove';
import PlusMinusComponent from './components/plus-minus-basic';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const counter = 0;
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
  
  return (
    <>
        
        Welcome to App HomePage
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/add-remove" element={<PlusMinusComponent/>}/> 
        </Routes>
        </> 

  )
}

export default App;
