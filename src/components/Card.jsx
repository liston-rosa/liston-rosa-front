import React from "react";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import styles from "../styles/card.module.css";


const CardList = ({ id, image, name, place, description }) => {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/murales/${id}`} className={styles.cardLink}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 120 }} image={image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              maxHeight={"75px"}
              overflow-y={"hidden"}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
export default CardList;

{
  /* 
        <div className={styles.card}>
          <Image
            src={muralG}
            alt="proyecto"
            width={"auto"}
            height={"auto"}
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
            <p>
              {description}
            </p>
          </div>
        </div> 
  */
}
