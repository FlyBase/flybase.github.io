import React, { Component } from 'react'
import { graphql } from 'gatsby'

import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'
import { Grid } from 'semantic-ui-react'

import Layout from './layout';

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, __mdxScope, data, ...props } = this.props
    return (
      <MDXProvider components={{}}>
        <Layout>
          <Grid padded>
            <Grid.Row>
              <Grid.Column width={16}>
                <div>{children}</div>
                <MDXRenderer {...props} scope={__mdxScope}>
                  {data.mdx.code.body}
                </MDXRenderer>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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