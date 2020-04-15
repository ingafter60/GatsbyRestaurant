import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keyword={[`gatsby`, `application`, `react`]} />
    <h3>Hello, Welcome to Anjel's Restaurant</h3>
    <div className="container">
      <div className="row">
        <div className="col-6">Hello 1</div>
        <div className="col-6">Hello 2</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
