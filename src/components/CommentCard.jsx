import Image from "next/image";
import React, { useContext } from "react";
import btnB from "../images/btnB.png";
import styles from "../styles/commentCard.module.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader } from "@mui/material";

export default function CommentCard({ user, title, body }) {
  return (
    
    // <div className={styles.cardCont}>
    //   <div className={styles.commentHeader}>
    //     <Image src={btnB} alt="user avatar" />
    //     <p>{user}</p>
    //   </div>

    //   <div className={styles.commentBodyContainer}>
    //     <p>{title}</p>
    //     <article className={styles.articleBody}>{body}</article>
    //   </div>
    // </div>
    
    <Card sx={{ maxWidth: 550, marginBottom: '30px', boxShadow: '1px 2px 3px purple'}}>
      <CardActionArea>
        <div className={styles.commentHeader}>
          <Image src={btnB} alt="user avatar" className={styles.btnb} />
          <p>{user}</p>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
