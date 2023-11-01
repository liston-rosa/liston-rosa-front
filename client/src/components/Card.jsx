import React from "react";
import Link from "next/link";
import styles from '../styles/card.module.css'
import Image from "next/image";
import muralG from '../images/muralG.jpg'
const Card = ({ id, image, name, place, description }) => {
    // console.log()

  return (
    <div className={styles.mainContainer}>
      <Link href={`/murales/${id}`} className={styles.cardLink}>
        <div className={styles.card}>
          <Image 
          src={muralG}
          alt='proyecto'
          width={'auto'}
          height={'auto'}
          priority
          />
          <div className={styles.descripContainer}>
          <h4>{name}</h4>

         
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
          </div>
          <div className={styles.description}>
            <p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque consequuntur unde quidem sunt deserunt reprehenderit beatae mollitia laudantium minus blanditiis aliquam vero debitis, non, quibusdam totam eius, veniam cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim quidem quibusdam iusto deserunt facere sequi nesciunt quod, quisquam expedita, dolor illo, soluta asperiores adipisci incidunt laboriosam quam consequuntur illum.</p>
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
