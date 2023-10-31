import React from "react";
import styles from "../styles/artwork.module.css";
import Link from "next/link";

const Card = ({ id, image, name, place, description, comments }) => {
    console.log(comments)

  return (
    <div className={styles.mainContainer}>
      <Link href={`/murales/${id}`} className={styles.cardLink}>
        <div className={styles.card}>
          <h2>Obra: {name}</h2>
          <div className={styles.state}>
            <p>
              <strong>Provincia:</strong> {place?.state}
            </p>
          </div>
          <div className={styles.city}>
            <p>
              <strong>Ciudad:</strong> {place?.city}
            </p>
          </div>
          <div className={styles.description}>
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
export default Card;
