import React, { useContext } from "react";
import { GlobalContext } from "@/AppContext/AppContext";
import Header from "@/components/Header";
import Link from "next/link";
import ArtWork from "@/components/ArtWork";
import styles from '../styles/murales.module.css'

export default function Murales() {
  const { artWork } = useContext(GlobalContext);
    // console.log(artWork)
  return (
    <div className={styles.listContainer}>
      <header>
        <Header />
      </header>
      <div className={styles.title}>
        <strong>Tenemos una historia para contarte</strong>
      </div>
      {artWork?.map((a) => {
        return (
          <div className={styles.artworkContainer} key={a._id}>
            <ArtWork
              id={a._id}
              image={a.image}
              name={a.name}
              place={a.place}
              description={a.description}
            />
          </div>
        );
      })}
      <div className="asd">
        <Link href="/"> back </Link>
      </div>
    </div>
  );
}
