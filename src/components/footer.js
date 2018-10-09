import React from "react"
import { Divider, Grid } from "semantic-ui-react"

import FlyBaseIcons from "./FlyBaseIcons"

const Footer = () => (
  <Grid as={"footer"} padded>
    <Grid.Row>
      <Grid.Column width={16}>
        <Divider />
        <FlyBaseIcons />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Footer
