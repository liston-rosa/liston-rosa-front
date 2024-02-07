"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "../styles/footer.module.css";

import { info, number } from "@/utils/contants";

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
            <Image src={facebook} alt="" width={"auto"} height={"auto"} />
          </Link>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <Link
          href={`https://wa.me/${number}`}
          target="_blank"
          className={styles.linkStyle}
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
        </Link>
       {/* 
       
       <Link
          href={"https://twitter.com/cristreachi"}
          target="_blank"
          className={styles.linkStyle}
          rel="noopener noreferrer"
        >
          <XIcon />
        </Link>
         
        <Link
          href={"https://www.facebook.com/cristian.treachi/"}
          target="_blank"
          className={styles.linkStyle}
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </Link>
        <Link href={'https://www.facebook.com/cristian.treachi/'}
        target="_blank"
        className={styles.linkStyle} 
        rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Link> 

        */}

        {info.map((e, i) => (
          <p key={i}>{e}</p>
        ))}

      </div>
    </div>
  );
}

export default Footer;
