import React from "react";
import styles from "../styles/artwork.module.css";
import Link from "next/link";

const ArtWork = ({ id, image, name, place, description, key }) => {
  //   console.log(id)

  return (
    <div className={styles.mainContainer}>
      <Link href={`/murales/${id}`}>
        <div className="jk">
          <h2>Obra: {name}</h2>
          <div>
            <p>
              <strong>Provincia:</strong> {place?.state}
            </p>
          </div>
          <div>
            <p>
              <strong>Ciudad:</strong> {place?.city}
            </p>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
{
  /* <img src={image} alt="art work" /> */
}
export default ArtWork;
