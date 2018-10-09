import React from "react"
import { Icon } from "semantic-ui-react"

function FlyBaseIcons({ iconSize = "large" }) {
  return (
    <React.Fragment>
      <a href={"http://flybase.org"}>
        <Icon name={"home"} aria-label={"FlyBase.org"} link size={iconSize} />
      </a>
      <a href={"https://github.com/FlyBase/"}>
        <Icon name={"github"} aria-label={"GitHub"} link size={iconSize} />
      </a>
      <a href={"https://twitter.com/FlyBaseDotOrg"}>
        <Icon name={"twitter"} aria-label={"Twitter"} link size={iconSize} />
      </a>
      <a href={"http://www.youtube.com/c/FlyBaseTV"}>
        <Icon name={"youtube"} aria-label={"YouTube"} link size={iconSize} />
      </a>
      <a href={"http://flybase.org/contact/email"}>
        <Icon name={"mail"} aria-label={"Email"} link size={iconSize} />
      </a>
    </React.Fragment>
  )
}

export default FlyBaseIcons
