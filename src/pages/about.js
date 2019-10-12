import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the about page</h1>
    <p 
    style={{
        backgroundColor: 'purple'
        }}
    >Welcome to about</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src="https://as-images.apple.com/is/og-default?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1525370171638" alt="Something"/>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
