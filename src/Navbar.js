import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import "./Header.css";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhCafL8y2m4yUQyyx7RMKT-6Tok9vLUAQ",
    authDomain: "photoplus-pplus.firebaseapp.com",
    projectId: "photoplus-pplus",
    storageBucket: "photoplus-pplus.appspot.com",
    messagingSenderId: "552011738878",
    appId: "1:552011738878:web:9c09e9c421c7af1a977faf",
    measurementId: "G-W74KBLEP25"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
var mainUser="None";
var outbtn="<br></br><button id='signoutbtn' class='btn btn-block btn-danger' onClick='window.hello.signOutFunc()'>Sign out</button>"
firebase.auth().onAuthStateChanged(function(user) {
  if(user)
  {
    mainUser=user.displayName;
    document.getElementById('action').innerHTML="<p>Hi, "+mainUser+outbtn;
    localStorage.setItem("name",mainUser);
  }
  else{
    if(localStorage.getItem("curPath")!="/")
    {
      window.location.href="/";
    }
    
    document.getElementById('action').innerHTML="<p style='padding-top:8px;padding-left:5px;'></p>";
    
  }
  
});
var provider = new firebase.auth.GoogleAuthProvider();
var user = firebase.auth().currentUser;

export default class Navbar extends Component {
  constructor(){
    super();
    window.hello = this;
}
  state = {
    isopen: false,
    currentUser: '',
    showChat:false
  };
  handletoggle = () => {
    this.setState({ isopen: !this.state.isopen });
  };
  
  signOutFunc(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    
      alert("Signed Out!")
      window.location.href="/";

     
    }).catch(function(error) {
      // An error happened.
    });
    
    localStorage.setItem('name','');
  }
  componentDidMount(){
    if(localStorage.getItem('name')){
      if(localStorage.getItem('name').length>1)
    {
      document.getElementById('signdiv').style.display='none';
      document.getElementById('notsigndiv').style.display='block';
    }
    else{
      {
        document.getElementById('notsigndiv').style.display='none';
        document.getElementById('signdiv').style.display='block';
      }
    }
    }
  }
  render() {
    
    return (
        <div>
          <ul
            className={this.state.isopen ? "nav-links show-nav" : "nav-links"}
          >
      <div id="action">
        <div id="notsigndiv">Not Signed In</div>
      <div id="signdiv"><button id='signoutbtn' className='btn btn-block btn-danger' onClick={this.signOutFunc}>Sign out</button></div>
      </div>
          </ul>
        </div>
    );
  }
}
