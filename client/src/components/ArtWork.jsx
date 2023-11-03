import React from "react";
import Link from "next/link";
import Image from "next/image";
import CommentCard from "./CommentCard";
import muralG from "../images/muralG.jpg";
import styles from "../styles/artwork.module.css";
import Footer from "./Footer";

const ArtWork = ({ id, image, name, place, description, comments }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        {/* <Image
        src={image} 
        alt="Art work image"
        width={100}
        height={100}
      /> */}
        <Image
          src={muralG}
          alt="Art work image"
          width={"auto"}
          height={"auto"}
        />
      </div>
      <div className={styles.artworkCont}>
        <h3>{name}</h3>
        <article>
          {/* 450 words */}
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, necessitatibus! Tempora quam maxime, nihil blanditiis vero
          voluptatum quod repellendus perferendis deleniti facilis natus tenetur
          atque tempore! Suscipit autem consectetur itaque! Animi mollitia at
          impedit soluta dignissimos suscipit porro excepturi eos debitis
          repudiandae. Debitis quibusdam doloribus asperiores et nobis atque
          facilis rerum nemo eveniet. Mollitia eligendi repellat enim nihil
          obcaecati saepe. Quae explicabo porro eaque eligendi soluta. Quibusdam
          vel mollitia doloremque amet consequatur accusantium in tenetur optio
          itaque expedita est, accusamus dignissimos aliquam fuga ipsam.
          Molestias nostrum consectetur delectus quaerat officia! Tenetur
          praesentium sapiente temporibus, earum nam velit officiis dolorem
          animi ducimus. Dolorem fugiat est excepturi ullam vero? Officia
          repellat quibusdam culpa, modi aperiam voluptate placeat quia amet
          accusamus, rerum soluta! Ipsum aspernatur consectetur, nobis debitis
          vitae aut voluptatibus. Magni officiis dolorem modi itaque voluptatum
          minima sequi quidem cupiditate repellendus dignissimos corporis, quae
          optio dolorum, eius amet ipsa quaerat facere numquam. Excepturi
          deserunt, dolorem placeat id at, nostrum ut nulla cupiditate fuga,
          facere dolore eveniet eaque aliquid? Minus nulla voluptatum hic
          molestias iure rem quis nihil. Unde et porro rem aut! Possimus,
          nesciunt! Voluptate laudantium tempora sapiente enim voluptatibus
          voluptates, optio neque totam ipsa autem aspernatur nesciunt corporis,
          iure eligendi? Natus quo fugit tempore est obcaecati cum accusantium.
          Inventore, cum amet! Consequatur rem fugit sint, numquam fuga eaque.
          Possimus, mollitia consequatur? Error laborum delectus accusantium
          aspernatur esse quaerat, corrupti nostrum consequatur at pariatur
          necessitatibus vitae nobis similique impedit fugit veniam beatae!
          Quasi quo eos quod labore vitae totam a ratione eveniet ducimus, non
          fugiat quis alias ex eum facere ab nulla id esse accusamus velit
          eligendi! Veritatis animi asperiores assumenda. Ullam! Laboriosam,
          temporibus. Repellat distinctio soluta officia rem iusto veritatis
          commodi velit veniam autem voluptatem unde sequi corrupti doloribus
          tempore aspernatur vero error, natus expedita ipsum tempora eum iste
          saepe. Porro! Neque veniam animi, est id optio, sint cumque
          reprehenderit saepe ipsam ea cupiditate illo nisi atque pariatur.
          Culpa, repellendus neque laudantium soluta accusamus mollitia, quam
          veniam molestias quis ut explicabo. Aperiam repellat laboriosam ipsum
          quae modi similique velit tempore, delectus eos voluptatum totam rem
          ullam expedita sed, sint praesentium dolor omnis. Eos minima id nam
          itaque provident blanditiis, quos dolore! Ex nam quos porro
          consequuntur eveniet vitae dolores est totam iure expedita culpa a,
          officiis aliquid asperiores unde voluptatum adipisci eaque atque?
          Numquam eveniet vero expedita sapiente eos repudiandae corrupti.
          Laboriosam ullam alias quidem nulla? Illo, vitae dolorum? Atque ipsum
          quos, voluptas temporibus cum minus non necessitatibus, molestias
          delectus aperiam, reprehenderit eos tenetur adipisci vero similique!
          Quam eum iusto labore? Minima, voluptate quod soluta ipsam ratione hic
          quis facilis itaque blanditiis pariatur vel laboriosam nulla,
          distinctio temporibus numquam incidunt molestiae. Debitis amet
          voluptatum quidem doloribus saepe cupiditate corrupti quam a?
        </article>
        <p>provincia: {place?.state}</p>
        <p>ciudad: {place?.city}</p>
      </div>
      <div className={styles.artWorkComments}>
        <h4>registrate y comenta</h4>
        {comments?.map((e, i) => (
          <div key={i}>
            <CommentCard user={e.user} title={e.title} body={e.body} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
{
  /* <img src={image} alt="art work" /> */
}
export default ArtWork;
