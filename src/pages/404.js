import * as React from "react"
import Layout from "../layouts/layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <section className="wrapper">
        <div className="post_content" style={{ textAlign: "center" }}>
          <h1 className="gradient gradient-yellow-pink">404 Page Not Found</h1>
          <h1>🥴</h1>
          <p>
            I mean... What did you expect? <strong>Huh Garii!</strong>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
