import { useForm, ValidationError } from "@formspree/react"
import styles from "../styles/Contact.module.css"
const { contactForm, formControl, services, list } = styles

export const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMKEY)

  const services = ["Installation", "Repair", "Servicing & Maintenance"]

  if (state.succeeded) {
    return <p>Thanks for your submitting your details.We will contact you.</p>
  }
  return (
    <form onSubmit={handleSubmit} className={contactForm}>
      <div className={formControl}>
        <label htmlFor="name">Name: </label>
        <input id="name" type="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className={formControl}>
        <label htmlFor="email">Email Address: </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={formControl}>
        <label htmlFor="phone">Phone: </label>
        <input id="phone" type="phone" name="phone" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      </div>
      <div className={formControl}>
        <label htmlFor="message">Message: </label>
        <input id="message" type="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className={services}>
        <h3>Select the service you need:</h3>
        <ul className={list}>
          {services.map((service, index) => {
            return (
              <li key={index}>
                <input type="checkbox" name={service} id={service} /> &nbsp;
                {service}
              </li>
            )
          })}
        </ul>

        {/*  */}
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  )
}
