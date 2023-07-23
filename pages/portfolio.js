import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { BiSolidBusiness } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import styles from "../styles/Portfolio.module.css"
import { images as portfolioPics } from "../components/images"

const { services, portfolioSec } = styles

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Refined Air | Portfolio</title>
        <meta
          name="description"
          content="Professional ac installation services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={services}>
        <h1>Portfolio</h1>
        <section className={portfolioSec}>
          {portfolioPics.map((image, index) => {
            const { img, alt } = image
            return (
              <div key={index}>
                <img src={img} alt={alt} />
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}
