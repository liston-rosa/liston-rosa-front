import Image from "next/image";
import React, { useContext } from "react";
import userAvatar from "../images/userAvatar.png";
import styles from "../styles/commentCard.module.css";

export default function CommentCard({ user, title, body }) {
  return (
    <div className={styles.cardCont}>
      <div className={styles.commentHeader}>
        <Image src={userAvatar} width={25} height={25} />
        <p>{user}</p>
      </div>
      <div className={styles.commentBody}>
        <p>{title}</p>
        <article>
          {body} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
          laudantium cum dolor mollitia ad, ut illum cupiditate velit, tempore
          autem esse itaque aliquid excepturi similique maxime perferendis
          voluptates rerum beatae!
        </article>
      </div>
    </div>
  );
}
