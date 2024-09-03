'use client'
import React, { useContext } from "react";
import { GlobalContext } from "@/AppContext/AppContext";
import CardList from "@/components/Card";
import styles from '@/styles/murales.module.css'



 const metadata = {
  title: 'cosito'
}


export default function Murales() {
  const { artWork } = useContext(GlobalContext);
  
  return (
    <div className={styles.listContainer}>
      <div className={styles.title}>
        <p>Tenemos una historia para contarte</p>
      </div>
      <div className={styles.artworkContainer}>
      {artWork?.map((a) => {
        return (
            <CardList
              id={a._id}
              image={a.image}
              name={a.name}
              place={a.place}
              description={a.description}
            />
          );
        })}
        </div>
    </div>
  );
}
