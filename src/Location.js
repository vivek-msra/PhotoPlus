import React, { Component } from 'react'
class Location extends Component {
    state={lat:null , errorMessage: ''};
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({lat:position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        ); 
    }
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div style={{color: "red"}}>Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat){
            return <div><small style={{color:"black",fontWeight:"bold" , fontStyle:"italic"}}><marquee scrollamount="10" >You are at Latitude :<h7 style={{color:"Highlight"}}> {this.state.lat}. </h7> <h7 style={{color: "red" , textDecoration:"blink"}}>WELCOME To PhotoPlus</h7>. For Queries Mail us : <u style={{cursor:"pointer" , color:"Highlight"}}>sbmishra29416@gmail.com</u>    Contact Us: <u style={{cursor: "pointer" , color:"Highlight"}}>+91- 8881071077 </u></marquee></small></div>
        }
        return <div style={{color: "blue",backgroundColor: "red"}}>Allow to show Latitude!</div>
    }
}
export default Location;
