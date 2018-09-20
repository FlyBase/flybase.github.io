import React from 'react'
import { Link } from 'gatsby'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Home from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import GitHub from './GitHub'

const Header = ({ siteTitle }) => (
  <div>
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Grid container>
          <Grid item xs={9}>
            <Typography variant="headline" color="inherit">
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {siteTitle}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <IconButton href="http://flybase.org" aria-label="FlyBase">
              <Home />
            </IconButton>
            <IconButton href="https://github.com/FlyBase" aria-label="Github">
              <GitHub />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
