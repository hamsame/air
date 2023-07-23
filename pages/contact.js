import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Contact.module.css"
import { MapContainer } from "../components/Maps"
import { ContactForm } from "../components/contactForm"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Refined Air | Contact</title>
        <meta
          name="description"
          content="Professional ac installation services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <div className={styles.formDiv}>
            <h1>Get In Touch</h1>
            {/* form */}
            {/* form - contactForm class form div - formControl deets - .details  */}
            <ContactForm />
          </div>
          <div className={styles.details}>
            <h2>Or contact us</h2>
            <p>info@refinedair.co.uk</p>
            <p>London - 074 944 3548</p>
            <p>Luton - 079 3917 8622</p>
          </div>
        </section>

        <section>
          <MapContainer />
        </section>
      </main>
    </>
  )
}
