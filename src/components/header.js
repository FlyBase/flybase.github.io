import React from "react"
import { Link } from "gatsby"
import { Grid, Header as SemHeader } from "semantic-ui-react"

import FlyBaseIcons from "./FlyBaseIcons"

const Header = ({ siteTitle, iconSize = "large" }) => (
  <Grid as={"header"} className={"topbar"} verticalAlign="middle" padded>
    <Grid.Row>
      <Grid.Column width={12}>
        <SemHeader as={"h1"}>
          <Link to={"/"} className={"title"}>
            {siteTitle}
          </Link>
        </SemHeader>
      </Grid.Column>
      <Grid.Column width={4}>
        <FlyBaseIcons iconSize={iconSize} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Header
