(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(182);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),u=n.n(i),o=n(148),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(28);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(159),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(39);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},159:function(e,t,n){var a;e.exports=(a=n(172))&&a.default||a},171:function(e){e.exports={data:{site:{siteMetadata:{title:"FlyBase for Developers"}}}}},172:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n.n(a),i=n(0),u=n.n(i),o=n(4),c=n.n(o),l=n(53),s=n(1),d=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return u.a.createElement(l.a,r()({location:t,pageResources:n},n.json))};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},173:function(e,t,n){},182:function(e,t,n){"use strict";var a=n(171),r=n(0),i=n.n(r),u=n(4),o=n.n(u),c=n(208),l=n.n(c),s=n(155),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(173),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:o.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-79192a086341cf5441c7.js.map