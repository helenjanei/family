import React from 'react';
import Kitchenpic from './29lhj-journal-kitchen.png'

import { Router, Link } from "@reach/router"

class Kitchen extends React.Component {
  render() {
   return (
   <div className="kitchen-container">
<img src={Kitchenpic} alt="" className="kitchen-image"/><Link rel="stylesheet" to="/recipe-finder" className="recipe-link">
  <a className="recipe-target" href="" title="" ></a>
  </Link>
     <h1 className="kitchen-title">Welcome to the Kitchen!</h1>
   </div>
   )  
}
  
}



export default Kitchen