(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),o=n(202),c=n.n(o),i=n(0),l=n.n(i),u=n(227),s=n(534),d=n(143),p=n(228),f={Breadcrumb:s.a,navigate:d.navigate,React:l.a,MDXTag:p.MDXTag},m=(n(69),n(6)),h=n.n(m),v=n(203),y=Object(u.withMDXScope)(Object(v.withMDXComponents)(({scope:e={},components:t={},children:n,...a})=>{const r={components:t,props:a,...e},o=Object.keys(r),c=o.map(e=>r[e]);return new Function("_fn",...o,`${n}`)({},...c)({components:t,...a})})),b=n(543),E=n(167),g=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.__mdxScope,a=e.data,r=c()(e,["children","__mdxScope","data"]);return l.a.createElement(p.MDXProvider,{components:{}},l.a.createElement(E.a,null,l.a.createElement(b.a,{padded:!0},l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,{width:16},l.a.createElement("div",null,t),l.a.createElement(y,Object.assign({},r,{scope:n}),a.mdx.code.body))))))},t}(i.Component);n.d(t,"pageQuery",function(){return w});var w="2750763803";t.default=function(e){var t=e.children,n=c()(e,["children"]);return l.a.createElement(u.MDXScopeProvider,{__mdxScope:r()({},f)},l.a.createElement(g,n,t))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=n(138),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(31);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,n){var a;e.exports=(a=n(162))&&a.default||a},162:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),o=n(0),c=n.n(o),i=n(4),l=n.n(i),u=n(48),s=n(2),d=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(u.a,r()({location:t,pageResources:n},n.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},165:function(e){e.exports={data:{site:{siteMetadata:{title:"FlyBase for Developers"}}}}},166:function(e,t,n){},167:function(e,t,n){"use strict";var a=n(165),r=n(0),o=n.n(r),c=n(4),i=n.n(c),l=n(196),u=n.n(l),s=n(143),d=n(543),p=n(542),f=n(536);var m=function(e){var t=e.iconSize,n=void 0===t?"large":t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"http://flybase.org"},o.a.createElement(f.a,{name:"home","aria-label":"FlyBase.org",link:!0,size:n})),o.a.createElement("a",{href:"https://github.com/FlyBase/"},o.a.createElement(f.a,{name:"github","aria-label":"GitHub",link:!0,size:n})),o.a.createElement("a",{href:"https://twitter.com/FlyBaseDotOrg"},o.a.createElement(f.a,{name:"twitter","aria-label":"Twitter",link:!0,size:n})),o.a.createElement("a",{href:"http://www.youtube.com/c/FlyBaseTV"},o.a.createElement(f.a,{name:"youtube","aria-label":"YouTube",link:!0,size:n})),o.a.createElement("a",{href:"http://flybase.org/contact/email"},o.a.createElement(f.a,{name:"mail","aria-label":"Email",link:!0,size:n})))},h=function(e){var t=e.siteTitle,n=e.iconSize,a=void 0===n?"large":n;return o.a.createElement(d.a,{as:"header",className:"topbar",verticalAlign:"middle",padded:!0},o.a.createElement(d.a.Row,null,o.a.createElement(d.a.Column,{width:12},o.a.createElement(p.a,{as:"h1"},o.a.createElement(s.Link,{to:"/",className:"title"},t))),o.a.createElement(d.a.Column,{width:4},o.a.createElement(m,{iconSize:a}))))},v=n(540),y=function(){return o.a.createElement(d.a,{as:"footer",padded:!0},o.a.createElement(d.a.Row,null,o.a.createElement(d.a.Column,{width:16},o.a.createElement(v.a,null),o.a.createElement(m,null))))},b=(n(197),n(166),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"FlyBase developer documentation."},{name:"keywords",content:"FlyBase, chado, documentation"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700",rel:"stylesheet"})),o.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(y,null))},data:a})});b.propTypes={children:i.a.node.isRequired};t.a=b},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(0),c=(a=o)&&a.__esModule?a:{default:a};var i=c.default.createContext({}),l=i.Provider,u=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return c.default.createElement(u,null,function(t){return c.default.createElement(e,r({components:n||t},a))})}};t.default=function(e){var t=e.components,n=e.children;return c.default.createElement(l,{value:t},n)}},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var c=(0,o(n(63)).default)({}),i=c.Provider,l=c.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["scope"]);return r.default.createElement(l,null,function(t){return r.default.createElement(e,a({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return r.default.createElement(i,{value:t},n)}},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(298);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(203);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),i=(a=c)&&a.__esModule?a:{default:a},l=n(203);var u={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,c=e.children,l=e.components,s=void 0===l?{}:l,d=e.Layout,p=e.layoutProps,f=s[n+"."+t]||s[t]||u[t]||t;return d?i.default.createElement(d,r({components:s},p),i.default.createElement(f,o,c)):i.default.createElement(f,o,c)}}]),t}();t.default=(0,l.withMDXComponents)(s)},534:function(e,t,n){"use strict";var a=n(137),r=n.n(a),o=(n(152),n(213)),c=n.n(o),i=n(135),l=n.n(i),u=(n(4),n(0)),s=n.n(u),d=n(239),p=n(240),f=n(136),m=n(10),h=n.n(m),v=n(164),y=n.n(v),b=n(257),E=n(536);function g(e){var t=e.children,n=e.className,a=e.content,o=e.icon,c=l()("divider",n),i=Object(d.a)(g,e),u=Object(p.a)(g,e);return y()(o)?y()(a)?s.a.createElement(u,r()({},i,{className:c}),f.a.isNil(t)?"/":t):s.a.createElement(u,r()({},i,{className:c}),a):E.a.create(o,{defaultProps:h()({},i,{className:c}),autoGenerateKey:!1})}g.handledProps=["as","children","className","content","icon"],g.propTypes={},g.create=Object(b.b)(g,function(e){return{icon:e}});var w=g,O=n(147),j=n.n(O),_=n(148),P=n.n(_),k=n(149),M=n.n(k),C=n(150),S=n.n(C),T=n(151),D=n.n(T),N=n(47),x=n.n(N),X=n(30),R=n.n(X),q=n(158),F=n.n(q),z=n(159),B=function(e){function t(){var e,n;j()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=M()(this,(e=S()(t)).call.apply(e,[this].concat(r))),R()(x()(x()(n)),"computeElementType",function(){var e=n.props,t=e.link,a=e.onClick;if(t||a)return"a"}),R()(x()(x()(n)),"handleClick",function(e){return F()(n.props,"onClick",e,n.props)}),n}return D()(t,e),P()(t,[{key:"render",value:function(){var e=this.props,n=e.active,a=e.children,o=e.className,c=e.content,i=e.href,u=l()(Object(z.a)(n,"active"),"section",o),m=Object(d.a)(t,this.props),h=Object(p.a)(t,this.props,this.computeElementType);return s.a.createElement(h,r()({},m,{className:u,href:i,onClick:this.handleClick}),f.a.isNil(a)?c:a)}}]),t}(u.Component);function G(e){var t=e.children,n=e.className,a=e.divider,o=e.icon,i=e.sections,u=e.size,m=l()("ui",u,"breadcrumb",n),h=Object(d.a)(G,e),v=Object(p.a)(G,e);if(!f.a.isNil(t))return s.a.createElement(v,r()({},h,{className:m}),t);var y=[];return c()(i,function(e,t){var n=B.create(e);if(y.push(n),t!==i.length-1){var r="".concat(n.key,"_divider")||!1;y.push(w.create({content:a,icon:o,key:r}))}}),s.a.createElement(v,r()({},h,{className:m}),y)}R()(B,"handledProps",["active","as","children","className","content","href","link","onClick"]),B.propTypes={},B.create=Object(b.b)(B,function(e){return{content:e,link:!0}}),G.handledProps=["as","children","className","divider","icon","sections","size"],G.propTypes={},G.Divider=w,G.Section=B;t.a=G}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-deb-6-c-7-d-7-eb-3869-acdc-0-a-63-f-0-ae-3-a-9-a-6-b-scope-hash-50-c-56-d-010470914-f-02314-da-677882422-js-efb4100cfeb86093465d.js.map