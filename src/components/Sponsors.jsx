"use client"
import React from "react";
import Image from "next/image";

import always from "@/images/brands/always.png";
import chanel from "@/images/brands/chanel.png";
import dove from "@/images/brands/dove.png";
import johnsons from "@/images/brands/johnsons.png";
import kotex from "@/images/brands/kotex.png";
import loreal from "@/images/brands/loreal.png";
import mac from "@/images/brands/mac.png";
import maybelline from "@/images/brands/maybelline.png";
import rexona from "@/images/brands/rexona.png";
import vichy from "@/images/brands/vichy.png";

import styles from '@/styles/sponsors.module.css'

const images = [
  always,
  chanel,
  dove,
  johnsons,
  kotex,
  loreal,
  mac,
  maybelline,
  rexona,
  vichy,
];

function Sponsors() {
  return (
    <div className={styles.sponsorsContainer}>
      {images?.map((im, i) => (
        <div key={i}>
          <Image src={im} width={'auto'} height={'auto'} alt="campaing donator"/>
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
