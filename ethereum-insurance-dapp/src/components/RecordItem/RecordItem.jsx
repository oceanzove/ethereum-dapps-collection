import React from "react";
import './Record.css';
const RecordItem = (props) => {
   return (
     <div className='record'>
         <div className='tag'>Id: </div>{props.id.toString()}
         <div className='tag'>Name: </div>{props.name}
         <div className='tag'>Date: </div>{props.date}
         <div className='tag'>Price: </div>{props.price.toString()} ETH
     </div>
   );
}

export default RecordItem;
