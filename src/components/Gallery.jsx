'use client'
import React, {useContext} from 'react';
import { GlobalContext } from "@/AppContext/AppContext";


const Gallery = () => {
    const {artwork} = useContext(GlobalContext)
    console.log('ARTWORK ----->',artwork)

  return (
    <div>Gallery</div>
  )
}

export default Gallery