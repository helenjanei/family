import React from 'react';
import Board from './cludoBoard.png'

class CludoBoard extends React.Component {
  render() {
   return (
    <div className="cludoBoard">
   
      <img src={Board} className='cludoBoardImg' alt="classic cludo board" usemap="#image-map"/>
 

  <a className="kitchen-target" href="" title="" ></a>
   <a href="" title="Dance the night away!" className="ballroom-target"></a>
   <a href="" className="library-target"></a>

    </div>
   )  
}
  
}



export default CludoBoard