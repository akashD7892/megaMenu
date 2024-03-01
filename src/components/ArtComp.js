import React from 'react'
import megaData from '../megaData.json'

export default function ArtComp() {
  return (
    <div className='art'>
      <div className='walldecor'>
       
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Art & Collectibles ' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       } 

      
    </div>
    </div>
  )
}
