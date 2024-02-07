"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import ArtWork from "@/components/ArtWork";
import { fetchSingleArtWork } from "@/utils/fetchs";
import CommentPost from "@/components/CommentPost";
import CommentCard from "@/components/CommentCard";

import styles from "@/styles/artwork.module.css";
import ArtModal from "@/components/ArtModal";

export default function Details() {
  const [details, setDetails] = useState({});
  const [error, setErrorState] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSingleArtWork(id);
      const [error, obj] = data;
      error ? setErrorState(true) : setDetails(obj);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ArtModal backstage={ details.backstage ? details.backstage : undefined } title={details.name}/>
      <ArtWork
        id={details._id}
        comments={details.comments}
        description={details.description}
        image={details.image}
        name={details.name}
        place={details.place}
        coordinates={details.coordinates}
      />
      <div className={styles.artWorkComments}>
        <div className={styles.commentPost}>
          <CommentPost />
        </div>
        {details.comments?.map((e, i) => (
          <div key={i}>
            <CommentCard user={e.user} title={e.title} body={e.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
