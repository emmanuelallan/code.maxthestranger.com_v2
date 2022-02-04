import * as React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export default function Post(props) {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <section className="wrapper">
        <div className="post_content post-article">
          <div>
            <h1 className="post-title">{post.frontmatter.title}</h1>
            <h2 className="post-subtitle">
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
              <span> • {post.fields.readingTime.text} </span>
            </h2>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
