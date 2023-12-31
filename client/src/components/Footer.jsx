import React from "react";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const info = [
  "mail icon",
  "dirección icon",
  "tel icon",
  "whatsapp icon",
  "redes 1 icon",
  "redes 2 icon",
];

function Footer() {
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.usContainer}>
        <Link href="/us" target="_blank" rel="noopener noreferrer">
          us
        </Link>
      </div>
      <div className={styles.mediaContainer}>
        <div className={styles.igContainer}>
          <a
            href="http://instagram.com/liston_rosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={instagram} alt="" />
          </a>
        </div>

        <div className={styles.fbContainer}>
          <Link
            href="http://facebook.com/listonrosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={facebook} alt="" width={'auto'} height={'auto'} />
          </Link>
        </div>
      </div>

      <div className={styles.contactContainer}>
        {info.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </div>
  );
}

export default Footer;