import React from 'react';
import Librarypic from './Classic-Home-Library-Design-Round-Stair.png'
import { Router, Link } from "@reach/router"
import './App.css'

class Kitchen extends React.Component {
  render() {
   return (
   <div className="kitchen-container">
<img src={Librarypic} alt="" className="library-image"/><Link rel="stylesheet" to="/audiobooks" className="audiobook-link">
  <a className="audiobook-target" href="" title="" ></a>
  </Link>
     <h1 className="library-title">Welcome to the Library!</h1>
   </div>
   )  
}
  
}

export default Kitchen