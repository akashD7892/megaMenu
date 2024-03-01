import React from 'react'
import megaData from '../megaData.json'

export default function JewelComp() {
  return (
    <div className='jewel'>
      <div className='walldecor'>
       
       <li style={{fontWeight:"bold", marginTop:"-25px"}}>Wall Decor</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Earrings' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       } 

      <li style={{fontWeight:"bold"}}>Keyrings</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Keyrings' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>
    
    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Jewellery Set</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Jewellery Set' &&
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
