import React from 'react'
import { Link } from 'gatsby'
import { Grid, Header as SemHeader, Icon } from 'semantic-ui-react'

const Header = ({ siteTitle, iconSize ='large' }) => (
  <Grid as={'header'} className={'topbar'} verticalAlign='middle' padded>
    <Grid.Row>
      <Grid.Column width={10} >
        <SemHeader as={'h1'}>
          <Link to={'/'} className={'title'}>
            {siteTitle}
          </Link>
        </SemHeader>
      </Grid.Column>
      <Grid.Column width={6}>
        <a href={'http://flybase.org'}>
          <Icon name={'home'} aria-label={'FlyBase.org'} link size={iconSize}/>
        </a>
        <a href={'https://github.com/FlyBase/'}>
          <Icon name={'github'} aria-label={'GitHub'} link size={iconSize}/>
        </a>
        <a href={'https://twitter.com/FlyBaseDotOrg'}>
          <Icon name={'twitter'} aria-label={'Twitter'} link size={iconSize}/>
        </a>
        <a href={'http://www.youtube.com/c/FlyBaseTV'}>
          <Icon name={'youtube'} aria-label={'YouTube'}link size={iconSize}/>
        </a>
        <a href={'http://flybase.org/contact/email'}>
          <Icon name={'mail'} aria-label={'Email'}link size={iconSize}/>
        </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Header
