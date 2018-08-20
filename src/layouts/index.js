import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import 'hack/dist/hack.css'
import 'highlight.js/styles/sunburst.css'

const Layout = ({ children, data }) => (
  <div className='container'>
    <Helmet
      title={data.site.siteMetadata.title}
      bodyAttributes={{
        class: 'hack'
      }}
      meta={[
        { name: 'description', content: 'Design patterns with examples in TypeScript' },
        { name: 'keywords', content: 'design patterns, SOLID, TypeScript' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
    <footer className='-bottom'>Powered by @Hack CSS</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
