import React from 'react'
import megaData from '../megaData.json'

export default function HomeComp() {
  return (
    <div className='homeliving'>
    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Wall Decor</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Wall Decor' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       } 

      <li style={{fontWeight:"bold"}}>Wall Clocks</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Wall Clocks' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>

   
    <div className='walldecor'>
       
       <li style={{fontWeight:"bold", marginTop:"-10px"}}>Table Decor</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Table Decor' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }

     <li style={{fontWeight:"bold", marginTop:"-10px"}}>Trays</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Trays' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>
    

    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Resin</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Resin' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>

    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Lippan</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Lippan' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }

    <li style={{fontWeight:"bold"}}>Candles</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Candles' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>

    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Photo Frame</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Photo Frame' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }

      <li style={{fontWeight:"bold"}}>Candle Holders</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Candle Holders' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>

    <div className='walldecor'>
       
       <li style={{fontWeight:"bold"}}>Lippan</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Pooja Essentials' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }

    <li style={{fontWeight:"bold"}}>Decorative Pot & Planters</li>
       {
          Object.keys(megaData).map( (data) => {
            const item = megaData[data] ;
            return(
              <div className="wall"  key={item.id}>
                {
                   item.parent?.name === 'Decorative Pot & Planters' &&
                   <li>{item.name}</li>
                }
              </div>
            )
          })
       }
    </div>

  </div>
)}
