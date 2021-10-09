import React, { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { AddCategory } from './Components/AddCategory';
import { GifRead } from './Components/GifRead';

const GifExpertApp = () => {

  // const categorias = ["One Punch", "picachu", "Goku"]
  const [categorias, setCategorias] = useState(["simpsons"]);

  return (
    <Fragment>
      <h1>Gif App</h1>
      <AddCategory setCategorias={setCategorias} categorias= {categorias}/>
      <hr/>
      <ol>
        {
          categorias.map ( categoria => {
            return (
              <GifRead 
                key={categoria} 
                categoria={categoria}/>
            )              
          })
        }
      </ol>

    </Fragment>
  );
}

export default GifExpertApp;