(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(167);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(138),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(146),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(31);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),i=a(0),l=a.n(i),o=a(4),c=a.n(o),u=a(48),s=a(2),m=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return l.a.createElement(u.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},165:function(e){e.exports={data:{site:{siteMetadata:{title:"FlyBase for Developers"}}}}},166:function(e,t,a){},167:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),l=a(4),o=a.n(l),c=a(196),u=a.n(c),s=a(143),m=a(543),d=a(542),f=a(536);var h=function(e){var t=e.iconSize,a=void 0===t?"large":t;return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"http://flybase.org"},i.a.createElement(f.a,{name:"home","aria-label":"FlyBase.org",link:!0,size:a})),i.a.createElement("a",{href:"https://github.com/FlyBase/"},i.a.createElement(f.a,{name:"github","aria-label":"GitHub",link:!0,size:a})),i.a.createElement("a",{href:"https://twitter.com/FlyBaseDotOrg"},i.a.createElement(f.a,{name:"twitter","aria-label":"Twitter",link:!0,size:a})),i.a.createElement("a",{href:"http://www.youtube.com/c/FlyBaseTV"},i.a.createElement(f.a,{name:"youtube","aria-label":"YouTube",link:!0,size:a})),i.a.createElement("a",{href:"http://flybase.org/contact/email"},i.a.createElement(f.a,{name:"mail","aria-label":"Email",link:!0,size:a})))},p=function(e){var t=e.siteTitle,a=e.iconSize,n=void 0===a?"large":a;return i.a.createElement(m.a,{as:"header",className:"topbar",verticalAlign:"middle",padded:!0},i.a.createElement(m.a.Row,null,i.a.createElement(m.a.Column,{width:12},i.a.createElement(d.a,{as:"h1"},i.a.createElement(s.Link,{to:"/",className:"title"},t))),i.a.createElement(m.a.Column,{width:4},i.a.createElement(h,{iconSize:n}))))},E=a(540),y=function(){return i.a.createElement(m.a,{as:"footer",padded:!0},i.a.createElement(m.a.Row,null,i.a.createElement(m.a.Column,{width:16},i.a.createElement(E.a,null),i.a.createElement(h,null))))},g=(a(197),a(166),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"FlyBase developer documentation."},{name:"keywords",content:"FlyBase, chado, documentation"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700",rel:"stylesheet"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(y,null))},data:n})});g.propTypes={children:o.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-ab911f52ce02d1fcbdd6.js.map