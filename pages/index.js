import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useGlobalContext } from "../components/context"
import styles from "../styles/Home.module.css"
import React, { useContext } from "react"
import { AppContext } from "../components/context"

export default function Home() {
  const data = useGlobalContext()
  return (
    <>
      <Head>
        <title>Refined Air</title>
        <meta name="description" content="Professional AC installations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.hero}>
          <article>
            <h1>Refined Air</h1>
            <p>Professional Air Conditioning Services</p>
            <Link href="/services">Our Services</Link>
          </article>
        </section>
        <section>
          <article className={styles.description}>
            <Image
              src="https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Installed AC"
              width={800}
              height={600}
            />
            <div>
              <h1>Installation</h1>
              {/* <p>
                We install AC units in both resedential and commercial spaces
              </p> */}
              {/* <Link href="/services">
                <a>Services</a>
              </Link> */}
            </div>
          </article>
          {/*  */}
          <article className={(styles.description, styles.reversed)}>
            <Image
              src="https://images.pexels.com/photos/16509869/pexels-photo-16509869/free-photo-of-close-up-of-man-using-a-spanner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Spanner for repairs"
              width={800}
              height={600}
            />
            <div>
              <h1>Repair</h1>
              {/* <p>We also repair AC units</p> */}
              {/* <Link href="/about">
                <a>Learn more about us</a>
              </Link> */}
            </div>
          </article>
        </section>
        {/*  */}
        <section className={styles.convert}>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Please feel free to fill in the contact form linked below and we
            will contact you.
          </p>
          <Link href="/">
            <a>Contact us</a>
          </Link>
        </section>
      </main>
    </>
  )
}
