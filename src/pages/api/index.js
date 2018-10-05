import React, {Component} from 'react'
//import SwaggerUI from 'swagger-ui'

//import 'swagger-ui/dist/swagger-ui.css'

import Layout from '../../components/layout'

//import { spec } from './openapi';

class Api extends Component {

/*  componentDidMount() {
    SwaggerUI({
      dom_id: '#swagger-container',
      spec: spec
    })
  }*/

  render() {

    return (
      <Layout>
        <div id={'swagger-container'} />
      </Layout>
    )
  }


}

export default Api
