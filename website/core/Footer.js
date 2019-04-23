/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('howtos.html', this.props.language)}>
              HowTo
            </a>
            <a href={this.docUrl('api/index.html', this.props.language)}>
              API
            </a>
            <a href={this.docUrl('chado/index.html', this.props.language)}>
              Chado
            </a>
            <a href={this.docUrl('downloads.html', this.props.language)}>
              Downloads
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://twitter.com/FlyBaseDotOrg">Twitter</a>
            <a href="http://www.youtube.com/c/FlyBaseTV">YouTube</a>
            <a href="https://groups.google.com/forum/#!forum/flybase">Google Groups</a>
            <a href="https://flybase.org/contact/email">Email</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/FlyBase">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/flybase/flybase.github.io/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
