import React from 'react'
import megaData from '../megaData.json';

export default function KitComp() {
  return (
    <div className='kitchen'>
      <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Drinkware</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Drinkware' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       } 

      
    </div>

    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Serveware</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Serveware' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       } 

      
    </div>

    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Tableware</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Tableware' &&
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
