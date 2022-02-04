import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"

import Hero from "../components/hero/hero"
import ListItem from "../components/listItem/listItem"
import Newsletter from "../components/newsletter/newsletter"

// markup
const IndexPage = (props) => {
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
          <Hero />

          <div className="flex_between pt_4">
            <h2>Latest Articles</h2>
            <Link to="/blog">Visit my Blog</Link>
          </div>

          <ul className="item_list">{renderAll()}</ul>

          <div className="pt_4 pb_4">
            <Newsletter />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
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
