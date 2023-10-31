import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import styles from '../styles/mapar.module.css'

function MapAr() {
  return (
    <div className={styles.mainContainer}>
      <Header />

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607203.875785047!2d-75.31460037658621!3d-36.57552440856652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1ses-419!2sar!4v1698619860366!5m2!1ses-419!2sar"
          width="350"
          height="600"
          style={{border:"0;", borderRadius:"12px"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Link href="/">atrás</Link>
    </div>
  );
}

export default MapAr;
