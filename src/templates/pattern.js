import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Page from '../components/Page'
import Doc from '../components/Doc'

const PatternPage = ({ data: { markdownRemark: { frontmatter } } }) => (
  <Layout
    title={`${frontmatter.title} - Grommet Patterns`}
    description={frontmatter.description}
  >
    <Page>
      <Doc
        photo={frontmatter.photo}
        name={frontmatter.title}
        description={
          <span>{frontmatter.description}</span>
        }
        source={frontmatter.source}
        demo={frontmatter.demo}
        tags={frontmatter.tags}
      />
    </Page>
  </Layout>
)

export default PatternPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        tags
        date(formatString: "MMMM DD, YYYY")
        title
        description
        source
        demo
        photo {
          childImageSharp {
            fixed(width: 500, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
