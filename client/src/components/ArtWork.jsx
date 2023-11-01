import React from "react";
import styles from "../styles/artwork.module.css";
import Link from "next/link";
import Image from "next/image";

const ArtWork = ({id, image, name, place, description, comments}) => {
    //console.log(id, image, name, place, description, comments) // check

  return (
    <div className={styles.mainContainer}>
      <div className="img">
        {/* <Image
        src={image} 
        alt="Art work image"
        width={100}
        height={100}
        /> */}
      </div>
      <div className="artwork-cont">
        <h3>una historia a pecho abierto</h3>
        <p>obra: {name}</p>
        <p>provincia: {place?.state}</p>
        <p>ciudad: {place?.city}</p>
        <p>{description}</p>
      </div>
      <div className="user-cont">
        <p>registrate y comenta</p>
        {
            comments?.map((e, i) => (
                <div key={i}>
                    <p>user: {e.user}</p>
                    <p>{e.title}</p>
                    <p>dijo: {e.body}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};
{
  /* <img src={image} alt="art work" /> */
}
export default ArtWork;
