import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keyword={[`gatsby`, `application`, `react`]} />
    <h3>Hello, Welcome to Anjel's Restaurant</h3>
  </Layout>
)

export default IndexPage
