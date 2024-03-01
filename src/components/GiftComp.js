import React from 'react'
import megaData from '../megaData.json' ;

export default function GiftComp() {
  return (
    <div className='gifting'>
       {
          
          Object.keys(megaData).map( (data) => {
              const item = megaData[data] ;
              return(
              <div className="gift"  key={item.id}>
              {
                 item.parent?.name === "Gifting" &&
                 <ul>
                    <li>{item.name}</li>
                 </ul>
              }
             </div>)

       })
  }
       
    </div>
  )
}
