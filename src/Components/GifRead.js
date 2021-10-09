import React, { Fragment, useEffect, useState } from 'react'
import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';
//  

export const GifRead = ( {categoria} ) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs(categoria).then(setImages)
  }, [categoria]);

  return (
    <Fragment>
    <h3> {categoria} </h3>
      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key={img.id} 
              {...img}
            />    
          ))
        }
      </div>
    </Fragment>    
  )
}
