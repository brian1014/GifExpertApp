import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoading(false)
  }

  /* 
    * ------------useEffect()------------
    * Se utiliza para ejecutar una funcion, solamente cuando la dependencia cambia 
    * Si el array de dependencias esta vacio, la funcion se ejecuta cada vez que se renderize el componente
  */
  useEffect(() => {
    getImages()
  }, []) 

  return {
    images,
    isLoading
  }
}
