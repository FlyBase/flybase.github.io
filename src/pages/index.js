import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'

const ChadoLink = props => <Link to={'/chado'} {...props} />
const ApiLink = props => <Link to={'/api'} {...props} />
const DownloadLink = props => <Link to={'/downloads'} {...props} />

const IndexPage = () => (
  <Layout>
    <Grid container justify={'flex-start'} style={{paddingBottom: '30px'}}>
      <Grid item xs={8}>
        <Typography variant={'subheading'} paragraph>
          Welcome to FlyBase for Developers.  This site is for developers, bioinformaticians, or other brave souls who
          wish to dive deeply into FlyBase data beyond the web site.
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={24} justify="space-evenly" alignItems="center">
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="display4" color="textPrimary" align={'center'}>
              <FontAwesomeIcon icon="coffee" />
            </Typography>
            <Typography>How to obtain and work with the FlyBase Chado Database</Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant={'outlined'} component={ChadoLink}>
              Chado
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="display4" color="textPrimary" align={'center'}>
              <FontAwesomeIcon icon="cogs" />
            </Typography>
            <Typography>FlyBase APIs</Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant={'outlined'} component={ApiLink}>
              API
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography variant="display4" color="textPrimary" align={'center'}>
              <FontAwesomeIcon icon="download" />
            </Typography>
            <Typography>Flat files and other downloadable datasets.</Typography>
          </CardContent>
          <CardActions>
            <Button fullWidth color="primary" variant={'outlined'} component={DownloadLink}>
              Downloads
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
