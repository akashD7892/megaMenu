import React from 'react'
import megaData from '../megaData.json' ;

export default function ArtworksComp() {
  return (
    <div className='artwork'>
      <div className='paintings'>
         
         <li style={{fontWeight:"bold"}}>Paintings</li>
         {
            Object.keys(megaData).map( (data) => {
              const item = megaData[data] ;
              return(
                <div className="paint"  key={item.id}>
                  {
                     item.parent?.name === 'Paintings' &&
                     <li>{item.name}</li>
                  }
                </div>
              )
            })
         }
      </div>

     
      <div className='folkart'>
         
         <li style={{fontWeight:"bold", marginTop:"-10px"}}>Folk Art</li>
         {
            Object.keys(megaData).map( (data) => {
              const item = megaData[data] ;
              return(
                <div className="folkart"  key={item.id}>
                  {
                     item.parent?.name === 'Folk Art' &&
                     <li>{item.name}</li>
                  }
                </div>
              )
            })
         }
      </div>
      

      <div className='religious'>
         
         <li style={{fontWeight:"bold"}}>Religious</li>
         {
            Object.keys(megaData).map( (data) => {
              const item = megaData[data] ;
              return(
                <div className="relig"  key={item.id}>
                  {
                     item.parent?.name === 'Religious' &&
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
