import Image from "next/image";
import BChomeImg from "../images/BChomeImg.jpg";
import styles from "../styles/page.module.css";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div className={styles.homeMain}>
      <aside className={styles.quoteContainer}>
        <p>
          "... Este proyecto es un abrazo a todas ellas y a nosotras mismas"
        </p>
      </aside>

      <div className={styles.imgHomeContainer}>
        <Image
          src={BChomeImg}
          alt="teta"
          width={"auto"}
          height={"auto"}
          priority
        />
        <article>
          Liston rosa es un proyecto de concientización para el cáncer de mama.
          Este proyecto busca intervenir la vía pública, hablando de aquello
          importante pero que es un tabú en nuestra sociedad, contando sobre la
          enfermedad que se oculta y no se nombra. Nuestro objetivo es gener un
          recorrido que se convierte en un viaje para descubrir la historia de
          una chica que está pasando por esta enfermedad. Esta historia busca
          representar a todas las mujeres que están pasando por esta situación,
          a quienes perdieron a una amiga, a una madre, una abuela, una hermana,
          una tía y a quienes todavía no se animan a hacerse un chequeo. Este
          proyecto es un abrazo a todas ellas y a nosotras mismas.
        </article>
        <br />
        <article>
          La visión para Listón Rosa es crecer como canal de difusión en todo el
          país, contar con el apoyo de grandes corporaciones para que la
          información se pueda difundir lo mas fácil posible. Aportar a la
          investigación y a la enfermedad en si, y que sea un proyecto en el
          cual cada mujer pueda aportar
        </article>
      </div>

      <aside className={styles.footerQuoteContainer}>
        <p>
          "... pero es un tabú en nuestra sociedad. La enfermedad que se oculta
          y no se nombra"
        </p>
      </aside>

      <section className={styles.support}>
        <p>Nos acompañan</p>
        <Sponsors />
      </section>
    </div>
  );
}
