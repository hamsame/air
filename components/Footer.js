import React from "react"
import Link from "next/link"
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa"
const d = new Date()

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Refined Air &copy; {d.getFullYear()} All Rights Reserved</p>
        <p>
          Click here to&nbsp;
          <Link href="/contact">contact us</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
