import React, { Component } from 'react'
import "./Style.css";
import logo from "./Photos/logo.jfif"
import o from "./Photos/line01/1.jpg"
import t from "./Photos/line01/2.jpg"
import tt from "./Photos/line01/3.jpg"
import fv from "./Photos/line01/4.jpg"
import oo from "./Photos/line02/1.jpg"
import ti from "./Photos/line02/2.jpg"
import th from "./Photos/line02/3.jpg"
import fr from "./Photos/line02/4.jpg"
import fvv from "./Photos/line02/5.jpg"
import { Link } from "react-router-dom";
import Location from './Location'
import Time from './Time'
class Photos extends Component {
    render() {
        return (
            <div className="contain">
                <Location/>
                <Time/>
                <div className="nav">
                    <img src={logo} className="logo"/>
                    <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#photos">Photos</a></li>
                    <li><a href="#work">Photography</a></li>
                    <li><a href="#Footer">About Us</a></li>
                </ul>
                </div>
               <Link style={{textDecoration:"none"}} to="/Gods" className="admin">Gods</Link>   <span></span>
               <Link style={{textDecoration:"none"}} to="/Gods" className="user">Nature</Link>
              <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/>        <br/> <br/> <br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/>  <br/> <br/> <br/><br/><br/><br/>
           <div id="photos" className="container">
           <img src={o} className="gallery" />
           <img src={fv} className="gallery" />
            <img src={tt} className="gallery" />
            <img src={tt} className="gallery"/>
            <img src={t} className="gallery" />
            <img src={oo} className="gallery" />
            <img src={ti} className="gallery" />
            <img src={th} className="gallery"  />
            <img src={fr} className="gallery" />
            <img src={fvv} className="gallery" />
            <img src={tt} className="gallery" />
            <img src={oo} className="gallery" />
            <img src={fvv} className="gallery" />
            <img src={th} className="gallery" />
            <img src={ti} className="gallery"/>
            <img src={t} className="gallery" />
            <img src={fr} className="gallery"  />
            <img src={fv} className="gallery" />
            <img src={o} className="gallery" />
            <img src={th} className="gallery" />
            <img src={t} className="gallery" />
            <img src={oo} className="gallery" />
            <img src={fr} className="gallery"  />
            <img src={ti} className="gallery" />
            <img src={fr} className="gallery" />
            <img src={th} className="gallery" />
            <img src={fvv} className="gallery" />
            <img src={t} className="gallery" />
            <img src={fv} className="gallery" />
            <img src={th} className="gallery"  />
            <img src={t} className="gallery" />
            <img src={ti} className="gallery" />
            <img src={oo} className="gallery"/>
            <img src={fvv} className="gallery" />
            <img src={th} className="gallery" />
            <img src={o} className="gallery" />
            </div>
            </div>
           
        )
    }
}
export default Photos
