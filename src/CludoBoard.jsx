import React from 'react';
import Board from './cludoBoard.png'
import { Router, Link } from "@reach/router"
import Kitchen from './kitchen'



class CludoBoard extends React.Component {
  render() {
   return (
    <div className="cludoBoard">
   
      <img src={Board} className='cludoBoardImg' alt="classic cludo board" usemap="#image-map"/>
 
<Link rel="stylesheet" to="/kitchen" className="kitchen-link">
  <a className="kitchen-target" href="" title="" ></a>
  </Link>
   <a href="" title="Dance the night away!" className="ballroom-target"></a>
   <a href="" className="library-target"></a>

    </div>
   )  
}
  
}



export default CludoBoard