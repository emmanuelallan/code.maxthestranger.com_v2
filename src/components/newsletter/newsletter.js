import * as React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import {
  mail_btn,
  mail_wrapper,
  mail_input,
  error,
  success,
} from "./newsletter.module.scss"

export default function Newsletter() {
  const [mail, setMail] = React.useState({
    email: "",
    result: { result: "", msg: "" },
  })

  const _handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(mail.email)
    setMail({ email: "", result: { result: result.result, msg: result.msg } })
  }

  const handleChange = (e) => {
    setMail({ email: e.target.value, result: { result: "", msg: "" } })
  }
  return (
    <form onSubmit={_handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Newsletter</h2>
      <p style={{ maxWidth: "550px", textAlign: "center", margin: "auto" }}>
        Subscribe to the newsletter to get my latest content by email. Not on
        any set schedule. Unsubscribe anytime.
      </p>

      <div className={mail_wrapper}>
        <input
          type="email"
          className={mail_input}
          placeholder="Enter you mail address"
          required
          name="email"
          value={mail.email}
          onChange={handleChange}
        />
        {mail.result.result === "success" ? (
          <p className={success}>Thank you for subscribing!</p>
        ) : mail.result.result === "error" ? (
          <p className={error}>User is already subscribed</p>
        ) : (
          ""
        )}
        <button className={mail_btn}>Subscribe</button>
      </div>
    </form>
  )
}
