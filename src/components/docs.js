import React, { Component } from 'react'
import { graphql } from 'gatsby'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'

import Layout from './layout';

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, __mdxScope, data, ...props } = this.props
    return (
      <MDXProvider components={{}}>
        <Layout>
          <div>{children}</div>
          <MDXRenderer {...props} scope={__mdxScope}>
            {data.mdx.code.body}
          </MDXRenderer>
        </Layout>
      </MDXProvider>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`