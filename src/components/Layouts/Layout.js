/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Headers/Header"
import Footer from "../Footers/Footer"

const Layout = ({ children, imageData }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{
      minHeight: `100%`
    }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main sx={{
          pb: 5
        }}>
          {children}
        </main>
      </div>
      <Footer imageData={imageData} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
