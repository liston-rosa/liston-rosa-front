import Image from "next/image";
import React from "react";
import styles from '@/styles/gallery.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const dataIMGS = [
  "https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg",
  "https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg",
  "https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg",
  "https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg",
  "https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg",
  "https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg",
  "https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg",
  "https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg",
  "https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg",
  "https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg",
  "https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg",
  "https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg",
  'https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg', 
  'https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg', 
  'https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg', 
  'https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg', 
  'https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg', 
  'https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg', 
  'https://content.cuerpomente.com/medio/2022/07/13/flores-simbolismo-espiritualidad_09ff3f15_1200x1200.jpg', 
  'https://s1.elespanol.com/2020/06/23/curiosidades/naturaleza-planeta-tierra/ciencias_naturales-flores-naturaleza_y_planeta_tierra_499960581_154305912_1706x960.jpg', 
  'https://content.clara.es/medio/2024/02/02/nombres-de-flores_86d2d9d1_240202100505_1280x960.jpg', 
];

const Gallery = () => {

  const handleClick = (direction) => {
    direction === 'previous' 
    ? undefined
    : undefined
  };

  return (
    <div className={styles.listContainer}>

      <ul className={styles.list}>
        {
          dataIMGS?.map((img, i) => (
            <li key={i} className={styles.listItem}> 
            <Image src={img} width={100} height={100} className={styles.image}/>
            </li>
          ))
        }
      </ul>
      <button className={styles.buttonPrev} type="button" onClick={handleClick('previous')}> <ArrowBackIosIcon  fontSize="small"/></button>
      <button className={styles.buttonNext} type="button" onClick={handleClick('next')}> <ArrowForwardIosIcon fontSize="small"/></button>
    </div>
  )
};

export default Gallery;
