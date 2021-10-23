import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//  

export const GifGrid = ( {categoria} ) => {

  // const [images, setImages] = useState([]);
  const {data, loading} = useFetchGifs(categoria);

  return (
    <Fragment>
    <h3> {categoria} </h3>

    { loading && "Cargando..."}

      <div className="card-grid">
        {
          data.map( img => (
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
