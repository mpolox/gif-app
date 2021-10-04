import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';
//  

export const GifRead = ( {categoria} ) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs();
  }, []);


  const getGifs =  async() => {
  const url = "https://api.giphy.com/v1/gifs/search?q=Simpsons&limit=10&api_key=UZgHd8Zauhexa000EvqDLpZHOGJx9UdD"
  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map (img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  // console.log(images);
  setImages( gifs );
}

  return (
    <div>
      <h3> {categoria} </h3>
      {
        images.map( img => (
          <GifGridItem 
            key={img.id} 
            {...img}
          />    
        ))
      }
    </div>
  )
}
