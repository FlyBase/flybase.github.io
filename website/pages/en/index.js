/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const swagger_url = 'https://app.swaggerhub.com/apis-docs/FlyBase/FlyBase/'

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );


    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('howtos-list')}>HowTo</Button>
            <Button href={docUrl('api/index')}>API</Button>
            <Button href={docUrl('chado/index')}>Chado</Button>
            <Button href={docUrl('downloads.html')}>Downloads</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Howto = () => (
      <Container
        padding={['all']}
        id="howto"
        className="front-page"
        background="light">
        <section>
          <a href={docUrl('howtos-list')}><i className="fas fa-book fa-7x" /></a>
          <div>
            <h2><a href={docUrl('howtos-list')}>HowTo</a></h2>
            <p>HowTo tutorials for working with FlyBase data.</p>
          </div>
        </section>
      </Container>
    );
    const Api = () => (
      <Container
        padding={['all']}
        id="api"
        className="front-page">
        <section>
          <a href={docUrl('api/index')}><i className="fas fa-cogs fa-7x" /></a>
          <div>
            <h2><a href={docUrl('api/index')}>API</a></h2>
            <p>Full details on all our available programmatic endpoints.</p>
          </div>
        </section>
      </Container>
    );

    const Chado = () => (
      <Container
        padding={['all']}
        id="chado"
        className="front-page"
        background="light">
        <section>
          <a href={docUrl('chado/index')}><i className="fas fa-mug-hot fa-7x" /></a>
          <div>
            <h2><a href={docUrl('chado/index')}>Chado</a></h2>
            <p>
              Chado is the relational database schema used by FlyBase and other organism databases
              to manage our curated Drosophila data.  Click here to learn about the FlyBase Chado database.
              How to download it, access our public server, query it, etc...
            </p>
          </div>
        </section>
      </Container>
    );

    const Downloads = () => (
      <Container
        padding={['all']}
        id="downloads"
        className="front-page">
        <section>
          <a href={docUrl('downloads.html')}><i className="fas fa-download fa-7x" /></a>
          <div>
            <h2><a href={docUrl('downloads.html')}>Downloads</a></h2>
            <p>Information about various downloadable bulk files that are available.</p>
          </div>
        </section>
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Howto />
          <Api />
          <Chado />
          <Downloads />
        </div>
      </div>
    );
  }
}

module.exports = Index;
