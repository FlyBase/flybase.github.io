import React from 'react'
import { navigate } from 'gatsby'
import { Card, Grid, Icon } from 'semantic-ui-react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Grid padded>
      <Grid.Row>
        <Grid.Column width={16}>
          <Card.Group centered>
            <Card raised link onClick={() => navigate('/chado/')}>
              <Icon className={'center'} area-label={'Chado'} name={'coffee'} size={'huge'} />
              <Card.Content>
                <Card.Header>
                  Chado
                </Card.Header>
                <Card.Description>
                  Learn about the FlyBase Chado database.  How to download it,
                  access our public server, query it, etc...
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised link onClick={() => navigate('/downloads/')}>
              <Icon className={'center'} area-label={'Downloads'} name={'download'} size={'huge'} />
              <Card.Content>
                <Card.Header>
                  Downloads
                </Card.Header>
                <Card.Description>
                  Information on various downloadable files available from FlyBase.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised link onClick={() => navigate('/api/')}>
              <Icon className={'center'} area-label={'API'} name={'cogs'} size={'huge'} />
              <Card.Content>
                <Card.Header>
                  API
                </Card.Header>
                <Card.Description>
                  Documentation and examples on using the FlyBase API.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card raised link href={'https://www.github.com/FlyBase'}>
              <Icon className={'center'} area-label={'GitHub'} name={'code'} size={'huge'} />
              <Card.Content>
                <Card.Header>
                  FlyBase code
                </Card.Header>
                <Card.Description>
                   Visit the FlyBase GitHub organization for our publicly available code.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>

)

export default IndexPage
