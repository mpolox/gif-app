import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifs(categoria)
      .then(imgs => {
                
        setState({
          data: imgs,
          loading: false
        });
      }
    )

  }, [categoria]);

  return state;
}
