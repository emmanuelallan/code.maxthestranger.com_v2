import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/layout"
import ListItem from "../components/listItem/listItem"

export default function Articles(props) {
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  const renderAll = () => {
    return posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug

      return (
        <ListItem
          key={node.fields.slug}
          href={`/posts${node.fields.slug}`}
          title={title}
          date={node.frontmatter.date}
        />
      )
    })
  }

  return (
    <Layout>
      <section className="wrapper">
        <div className="post_content">
          <h1 className="gradient gradient-cyan-green">
            Stories. Updates. Guides.
          </h1>
          <div>
            <p>
              Here you can find all the articles I wrote. You can read about web
              development, software engineering, and tech career.
            </p>
            {/* <h2>Featured Articles</h2> */}
            {/* render featured */}
            <h2>All articles</h2>
            {/* render all articles */}
            <ul className="item_list">{renderAll()}</ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
