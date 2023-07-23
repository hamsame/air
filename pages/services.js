import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Services.module.css"
import { BiSolidBusiness } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"

export default function Services() {
  return (
    <>
      <Head>
        <title>Refined Air | Services</title>
        <meta
          name="description"
          content="Professional ac installation services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.services}>
        <h1>Services</h1>
        <section>
          <p>
            {/* We are a family business in the air conditioning industry. We
            provide many services of Air conditioning system including
            installation, servicing and repairs. */}
          </p>
          Refined Air is a family business that provides many services in
          including installing, servicing and repairing AC units.
        </section>
        {/* insallation */}
        <section>
          <article>
            <h2>Planning</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
          <article>
            <h2>Installation</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
          <article>
            <h2>Servicing & Repairs</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, veritatis nesciunt molestiae ipsa maiores eveniet quo
              sequi voluptate neque quas fugit unde, beatae ex labore? Deleniti,
              sequi? Aut autem ipsam cupiditate aliquid. Est provident tempore
              quae, aspernatur eveniet ab delectus!
            </p>
          </article>
        </section>
        <section>
          <h2>We provide these services for both personal & commercial use.</h2>
          <article className={styles.servicesIconSec}>
            <div>
              <AiFillHome size={35} />
              <h3>Personal</h3>
            </div>
            <div>
              <BiSolidBusiness size={35} />
              <h3>Commercial</h3>
            </div>
          </article>
        </section>
        <p>
          Click here to&nbsp;
          <Link href="/contact">contact us</Link>
        </p>
      </main>
    </>
  )
}
