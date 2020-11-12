import React from 'react';
import Kitchenpic from './29lhj-journal-kitchen.png'
import { Router, Link } from "@reach/router"
import './App.css'


class Kitchen extends React.Component {
  render() {
   return (
   <div className="kitchen-container">
<img src={Kitchenpic} alt="" className="kitchen-image"/>
<Link rel="stylesheet" to="/recipe-finder" className="recipe-link">
  <a className="recipe-target" href="" title="" >
    
  </a>
  </Link>
  <div className="polaroid-feature">
     <p className="kitchen-title">Welcome to the Kitchen!</p>
   </div>
   </div>
   )  
}
  
}



export default Kitchen