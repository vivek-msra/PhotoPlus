//Project Initial page-:This page will create a google based sign in and sign out options.
import React, { Component } from "react";
import  firebase from 'firebase/app';
import 'firebase/auth';
import "./Header.css";// api to connect client with server  // medium to interact client with server
var provider = new firebase.auth.GoogleAuthProvider(); // creating instance of google provider class
var user="";
class Header extends React.Component {
  //initializing state outside consturctor
  state = {
    email: "",
    name: "",
    currentUser:'',
    password:''
  };
  //end of initialization
  
  //handler1
  handlesubmit = event => {
    event.preventDefault();//prevent things from happening . eg . if u click submit , prevent from submit
    const {email,password}=this.state // it assign state variable values to these two variables.
    const detail={email,password} 
  };
  //end of handler1

//signInWithPopup(provider) pop  up windows  to sign in with google
// firebase.auth().signInWithPopup(provider).then(function(result) -: This gives you a Google Access Token. You can use it to access the Google API.
  signInWithGoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result)  {
      user = result.user; // The signed-in user info
      window.location.href="/Photos" //after signin redirecting link , url  to bibek.js
    }).catch(function(error) {
       // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;  // The email of the user's account used.
      var credential = error.credential;// The firebase.auth.AuthCredential type that was used.
    }); 
  }
  //end of pop up
  //handle2 -: on change vlaue of name
  handleinputchange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

   //handle3 -: on change vlaue of email
onchangeemail=(text)=>{
  this.setState({email:text.target.value})
}

 //handle4 -: on change value of password
onchangepass=(text)=>{
  this.setState({password:text.target.value})
}

//handle5 -: submit button
// onformsubmit=()=>{
//  axios({ 
// url: "http://localhost:5000/acc-details", 
//  method: "POST",
//  headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded;charset=utf-8" },
//  data: { email: this.state.email, password: this.state.password } 
// })//end of axios part
//   .then(response=>{
//     console.log('success') //notify
//   })
//   .catch(err=>console.log(err)) //error handler
// }
// //end of onformsubmit

  render() {
    localStorage.setItem("curPath", "/");//storing data locally , 2 argument -: key, value
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props; //assigning props data to all those variables 
    return ( 
      <div>
        <div>
          <div>
          <div>
               <div>
                  <h1> Welcome to PhotoPlus!</h1>
                  <br/>
                  <p> Looking for a Photography?</p>
                  <p> Don't want to waste time going to different websites?</p>
                  <p> Click here to login.</p><br/>
               </div>
             </div> 
             <div>
               <div> 
           
      {
        user ? <button onClick={signOut}>Sign out</button>: <button onClick={this.signInWithGoogle}>Sign in with Google</button>
        //ternary operator to make sign in and sign out button- one at a time.
      }
               </div>
             </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
