import Head from "next/head"
import Image from "next/image"
import styles from "../styles/About.module.css"
import Link from "next/link"

export default function About() {
  return (
    <>
      <Head>
        <title>AC Engineers | About</title>
        <meta
          name="description"
          content="Professional ac installation services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.aboutIntro}>
          <Image
            src="https://images.pexels.com/photos/937483/pexels-photo-937483.jpeg?cs=srgb&dl=pexels-mentatdgt-937483.jpg&fm=jpg"
            alt="Founder"
            width={1600}
            height={1200}
          />
          <article>
            <h1>About Us</h1>
            <p>
              Refined Air is a family business that provides many services in
              including installing, servicing and repairing AC units. We started
              operating in Wembley from April 2020 expanding to other parts of
              London, surronding areas and even Luton.
            </p>
            <Link href="/services">
              <a>Check our services</a>
            </Link>
          </article>
        </section>
      </main>
    </>
  )
}
