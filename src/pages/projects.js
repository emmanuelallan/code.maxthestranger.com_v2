import * as React from "react"
// import FeaturedProjects from "../components/featuredProject/featuredProject"
import Layout from "../layouts/layout"

// import { projects, otherProjects } from "../data/projects"
// import OtherProject from "../components/otherProject/otherProject"

export default function Projects() {
  return (
    <Layout>
      <section className="wrapper">
        <div className="post_content">
          <h1 className="gradient gradient-blue-green">
            Work. Hobby. Open Source.
          </h1>
          <div>
            <p>
              I'm obsessed with side projects and{" "}
              <strong>building in public</strong>. Here you can navigate to
              different websites, apps, and libraries I built. Some projects are
              still active, others have been discontinued.
            </p>
            <h2>Featured Projects</h2>
            {/* <div>
              <ul style={{ padding: 0 }}>
                {projects.map((project) => (
                  <FeaturedProjects project={project} />
                ))}
              </ul>
            </div> */}

            {/* <h2>Note Worthy Projects</h2> */}
            {/* <div>
              <ul className="grid">
                {otherProjects.map((projos) => (
                  <OtherProject projos={projos} />
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  )
}
