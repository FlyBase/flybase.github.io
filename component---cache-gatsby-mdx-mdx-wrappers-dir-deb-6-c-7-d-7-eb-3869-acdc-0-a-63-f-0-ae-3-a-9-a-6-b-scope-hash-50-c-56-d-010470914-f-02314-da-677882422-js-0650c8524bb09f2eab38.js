(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(202),c=n.n(o),i=n(0),l=n.n(i),u=n(228),s=n(538),p=n(143),d=n(229),f={Breadcrumb:s.a,navigate:p.navigate,React:l.a,MDXTag:d.MDXTag},m=(n(69),n(6)),h=n.n(m),v=n(204),y=Object(u.withMDXScope)(Object(v.withMDXComponents)(({scope:e={},components:t={},children:n,...r})=>{const a={components:t,props:r,...e},o=Object.keys(a),c=o.map(e=>a[e]);return new Function("_fn",...o,`${n}`)({},...c)({components:t,...r})})),b=n(545),E=n(167),g=function(e){function t(){return e.apply(this,arguments)||this}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.__mdxScope,r=e.data,a=c()(e,["children","__mdxScope","data"]);return l.a.createElement(d.MDXProvider,{components:{}},l.a.createElement(E.a,null,l.a.createElement(b.a,{padded:!0},l.a.createElement(b.a.Row,null,l.a.createElement(b.a.Column,{width:16},l.a.createElement("div",null,t),l.a.createElement(y,Object.assign({},a,{scope:n}),r.mdx.code.body))))))},t}(i.Component);n.d(t,"pageQuery",function(){return w});var w="2750763803";t.default=function(e){var t=e.children,n=c()(e,["children"]);return l.a.createElement(u.MDXScopeProvider,{__mdxScope:a()({},f)},l.a.createElement(g,n,t))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(138),l=n.n(i);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var u=n(146),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var p=n(31);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),f=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,n){var r;e.exports=(r=n(162))&&r.default||r},162:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),c=n.n(o),i=n(4),l=n.n(i),u=n(48),s=n(2),p=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(u.a,a()({location:t,pageResources:n},n.json))};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=p},165:function(e){e.exports={data:{site:{siteMetadata:{title:"FlyBase for Developers"}}}}},166:function(e,t,n){},167:function(e,t,n){"use strict";var r=n(165),a=n(0),o=n.n(a),c=n(4),i=n.n(c),l=n(196),u=n.n(l),s=n(143),p=n(545),d=n(544),f=n(539);var m=function(e){var t=e.iconSize,n=void 0===t?"large":t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"http://flybase.org"},o.a.createElement(f.a,{name:"home","aria-label":"FlyBase.org",link:!0,size:n})),o.a.createElement("a",{href:"https://github.com/FlyBase/"},o.a.createElement(f.a,{name:"github","aria-label":"GitHub",link:!0,size:n})),o.a.createElement("a",{href:"https://twitter.com/FlyBaseDotOrg"},o.a.createElement(f.a,{name:"twitter","aria-label":"Twitter",link:!0,size:n})),o.a.createElement("a",{href:"http://www.youtube.com/c/FlyBaseTV"},o.a.createElement(f.a,{name:"youtube","aria-label":"YouTube",link:!0,size:n})),o.a.createElement("a",{href:"http://flybase.org/contact/email"},o.a.createElement(f.a,{name:"mail","aria-label":"Email",link:!0,size:n})))},h=function(e){var t=e.siteTitle,n=e.iconSize,r=void 0===n?"large":n;return o.a.createElement(p.a,{as:"header",className:"topbar",verticalAlign:"middle",padded:!0},o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Column,{width:12},o.a.createElement(d.a,{as:"h1"},o.a.createElement(s.Link,{to:"/",className:"title"},t))),o.a.createElement(p.a.Column,{width:4},o.a.createElement(m,{iconSize:r}))))},v=n(542),y=function(){return o.a.createElement(p.a,{as:"footer",padded:!0},o.a.createElement(p.a.Row,null,o.a.createElement(p.a.Column,{width:16},o.a.createElement(v.a,null),o.a.createElement(m,null))))},b=(n(197),n(166),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"FlyBase developer documentation."},{name:"keywords",content:"FlyBase, chado, documentation"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700",rel:"stylesheet"})),o.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("main",null,t),o.a.createElement(y,null))},data:r})});b.propTypes={children:i.a.node.isRequired};t.a=b},203:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,n,p){if("string"!=typeof n){if(s){var d=u(n);d&&d!==s&&e(t,d,p)}var f=c(n);i&&(f=f.concat(i(n)));for(var m=0;m<f.length;++m){var h=f[m];if(!(r[h]||a[h]||p&&p[h])){var v=l(n,h);try{o(t,h,v)}catch(e){}}}return t}return t}},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=i(n(0)),o=i(n(51)),c=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),u=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(s,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var p=function(e){var t=e.components,n=e.children;return a.default.createElement(u,{value:t},n)};p.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=p},228:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var c=(0,o(n(51)).default)({}),i=c.Provider,l=c.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scope"]);return a.default.createElement(l,null,function(t){return a.default.createElement(e,r({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return a.default.createElement(i,{value:t},n)}},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(298);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(204);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),c=u(o),i=u(n(203)),l=n(204);function u(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,u=e.components,p=void 0===u?{}:u,d=e.Layout,f=e.layoutProps,m=p[n+"."+t]||p[t]||s[t]||t;return d?((0,i.default)(this,d),c.default.createElement(d,r({components:p},f),c.default.createElement(m,o,l))):c.default.createElement(m,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(p)},538:function(e,t,n){"use strict";var r=n(137),a=n.n(r),o=(n(152),n(214)),c=n.n(o),i=n(135),l=n.n(i),u=(n(4),n(0)),s=n.n(u),p=n(240),d=n(241),f=n(136),m=n(10),h=n.n(m),v=n(164),y=n.n(v),b=n(258),E=n(539);function g(e){var t=e.children,n=e.className,r=e.content,o=e.icon,c=l()("divider",n),i=Object(p.a)(g,e),u=Object(d.a)(g,e);return y()(o)?y()(r)?s.a.createElement(u,a()({},i,{className:c}),f.a.isNil(t)?"/":t):s.a.createElement(u,a()({},i,{className:c}),r):E.a.create(o,{defaultProps:h()({},i,{className:c}),autoGenerateKey:!1})}g.handledProps=["as","children","className","content","icon"],g.propTypes={},g.create=Object(b.b)(g,function(e){return{icon:e}});var w=g,O=n(147),j=n.n(O),P=n(148),_=n.n(P),k=n(149),M=n.n(k),C=n(150),T=n.n(C),S=n(151),D=n.n(S),N=n(47),x=n.n(N),R=n(30),X=n.n(R),q=n(158),F=n.n(q),z=n(159),B=function(e){function t(){var e,n;j()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=M()(this,(e=T()(t)).call.apply(e,[this].concat(a))),X()(x()(x()(n)),"computeElementType",function(){var e=n.props,t=e.link,r=e.onClick;if(t||r)return"a"}),X()(x()(x()(n)),"handleClick",function(e){return F()(n.props,"onClick",e,n.props)}),n}return D()(t,e),_()(t,[{key:"render",value:function(){var e=this.props,n=e.active,r=e.children,o=e.className,c=e.content,i=e.href,u=l()(Object(z.a)(n,"active"),"section",o),m=Object(p.a)(t,this.props),h=Object(d.a)(t,this.props,this.computeElementType);return s.a.createElement(h,a()({},m,{className:u,href:i,onClick:this.handleClick}),f.a.isNil(r)?c:r)}}]),t}(u.Component);function G(e){var t=e.children,n=e.className,r=e.divider,o=e.icon,i=e.sections,u=e.size,m=l()("ui",u,"breadcrumb",n),h=Object(p.a)(G,e),v=Object(d.a)(G,e);if(!f.a.isNil(t))return s.a.createElement(v,a()({},h,{className:m}),t);var y=[];return c()(i,function(e,t){var n=B.create(e);if(y.push(n),t!==i.length-1){var a="".concat(n.key,"_divider")||!1;y.push(w.create({content:r,icon:o,key:a}))}}),s.a.createElement(v,a()({},h,{className:m}),y)}X()(B,"handledProps",["active","as","children","className","content","href","link","onClick"]),B.propTypes={},B.create=Object(b.b)(B,function(e){return{content:e,link:!0}}),G.handledProps=["as","children","className","divider","icon","sections","size"],G.propTypes={},G.Divider=w,G.Section=B;t.a=G}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-deb-6-c-7-d-7-eb-3869-acdc-0-a-63-f-0-ae-3-a-9-a-6-b-scope-hash-50-c-56-d-010470914-f-02314-da-677882422-js-0650c8524bb09f2eab38.js.map