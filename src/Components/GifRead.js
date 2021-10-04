import React from 'react'
//  
export const GifRead = ( {categoria} ) => {

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
    });

    console.log(gifs);    
  }

  getGifs();
  return (
    <div>
      <h3> {categoria} </h3>
    </div>
  )
}
