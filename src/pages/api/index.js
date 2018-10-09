import React, { Component } from "react"
import { navigate } from "gatsby"
import { Breadcrumb } from "semantic-ui-react"
import { RedocStandalone } from "redoc"

import Layout from "../../components/layout"

import spec from "./openapi.json"

class Api extends Component {
  render() {
    return (
      <Layout>
        <div className="breadcrumb-container">
          <Breadcrumb>
            <Breadcrumb.Section link onClick={() => navigate("/")}>
              Home
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section>API</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <RedocStandalone spec={spec} />
      </Layout>
    )
  }
}

export default Api
