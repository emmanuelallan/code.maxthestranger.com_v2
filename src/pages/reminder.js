import * as React from "react"

import Layout from "../layouts/layout"

export default function Reminder() {
  return (
    <Layout>
      <section className="wrapper">
        <div className="post_content">
          <h1 className="gradient gradient-blue-green">
            Tick-tock. Tick-tock.
          </h1>
          <div>
            <figure>
              <blockquote cite="https://code.maxthestranger.com">
                <p>Who seeks shall find</p>
              </blockquote>
              <figcaption>
                — Sophocles, <cite>Electra</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </Layout>
  )
}
