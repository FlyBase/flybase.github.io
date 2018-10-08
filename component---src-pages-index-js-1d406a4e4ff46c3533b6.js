;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    143: function(e, t, a) {
      'use strict'
      a.r(t)
      a(79)
      var n = a(0),
        r = a.n(n),
        l = a(152),
        i = a(216),
        o = a.n(i),
        c = a(318),
        s = a.n(c),
        u = a(322),
        m = a.n(u),
        d = a(320),
        p = a.n(d),
        f = a(171),
        h = a.n(f),
        E = a(164),
        y = a.n(E),
        g = a(317),
        v = a(162),
        b = function(e) {
          return r.a.createElement(l.Link, Object.assign({ to: '/chado' }, e))
        },
        w = function(e) {
          return r.a.createElement(l.Link, Object.assign({ to: '/api' }, e))
        },
        x = function(e) {
          return r.a.createElement(
            l.Link,
            Object.assign({ to: '/downloads' }, e)
          )
        }
      t.default = function() {
        return r.a.createElement(
          v.a,
          null,
          r.a.createElement(
            h.a,
            {
              container: !0,
              justify: 'flex-start',
              style: { paddingBottom: '30px' },
            },
            r.a.createElement(
              h.a,
              { item: !0, xs: 8 },
              r.a.createElement(
                y.a,
                { variant: 'subheading', paragraph: !0 },
                'Welcome to FlyBase for Developers.  This site is for developers, bioinformaticians, or other brave souls who wish to dive deeply into FlyBase data beyond the web site.'
              )
            )
          ),
          r.a.createElement(
            h.a,
            {
              container: !0,
              spacing: 24,
              justify: 'space-evenly',
              alignItems: 'center',
            },
            r.a.createElement(
              h.a,
              { item: !0, xs: 12, sm: 6, md: 3 },
              r.a.createElement(
                s.a,
                null,
                r.a.createElement(
                  p.a,
                  null,
                  r.a.createElement(
                    y.a,
                    {
                      variant: 'display4',
                      color: 'textPrimary',
                      align: 'center',
                    },
                    r.a.createElement(g.a, { icon: 'coffee' })
                  ),
                  r.a.createElement(
                    y.a,
                    null,
                    'How to obtain and work with the FlyBase Chado Database'
                  )
                ),
                r.a.createElement(
                  m.a,
                  null,
                  r.a.createElement(
                    o.a,
                    {
                      fullWidth: !0,
                      color: 'primary',
                      variant: 'outlined',
                      component: b,
                    },
                    'Chado'
                  )
                )
              )
            ),
            r.a.createElement(
              h.a,
              { item: !0, xs: 12, sm: 6, md: 3 },
              r.a.createElement(
                s.a,
                null,
                r.a.createElement(
                  p.a,
                  null,
                  r.a.createElement(
                    y.a,
                    {
                      variant: 'display4',
                      color: 'textPrimary',
                      align: 'center',
                    },
                    r.a.createElement(g.a, { icon: 'cogs' })
                  ),
                  r.a.createElement(y.a, null, 'FlyBase APIs')
                ),
                r.a.createElement(
                  m.a,
                  null,
                  r.a.createElement(
                    o.a,
                    {
                      fullWidth: !0,
                      color: 'primary',
                      variant: 'outlined',
                      component: w,
                    },
                    'API'
                  )
                )
              )
            ),
            r.a.createElement(
              h.a,
              { item: !0, xs: 12, sm: 6, md: 3 },
              r.a.createElement(
                s.a,
                null,
                r.a.createElement(
                  p.a,
                  null,
                  r.a.createElement(
                    y.a,
                    {
                      variant: 'display4',
                      color: 'textPrimary',
                      align: 'center',
                    },
                    r.a.createElement(g.a, { icon: 'download' })
                  ),
                  r.a.createElement(
                    y.a,
                    null,
                    'Flat files and other downloadable datasets.'
                  )
                ),
                r.a.createElement(
                  m.a,
                  null,
                  r.a.createElement(
                    o.a,
                    {
                      fullWidth: !0,
                      color: 'primary',
                      variant: 'outlined',
                      component: x,
                    },
                    'Downloads'
                  )
                )
              )
            )
          )
        )
      }
    },
    152: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return h
        }),
        a.d(t, 'StaticQueryContext', function() {
          return p
        }),
        a.d(t, 'StaticQuery', function() {
          return f
        })
      var n = a(0),
        r = a.n(n),
        l = a(4),
        i = a.n(l),
        o = a(147),
        c = a.n(o)
      a.d(t, 'Link', function() {
        return c.a
      }),
        a.d(t, 'withPrefix', function() {
          return o.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return o.navigate
        }),
        a.d(t, 'push', function() {
          return o.push
        }),
        a.d(t, 'replace', function() {
          return o.replace
        }),
        a.d(t, 'navigateTo', function() {
          return o.navigateTo
        })
      var s = a(28)
      a.d(t, 'waitForRouteChange', function() {
        return s.c
      })
      var u = a(153),
        m = a.n(u)
      a.d(t, 'PageRenderer', function() {
        return m.a
      })
      var d = a(41)
      a.d(t, 'parsePath', function() {
        return d.a
      })
      var p = r.a.createContext({}),
        f = function(e) {
          return r.a.createElement(p.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      f.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func,
      }
    },
    153: function(e, t, a) {
      var n
      e.exports = ((n = a(156)) && n.default) || n
    },
    155: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: 'FlyBase for Developers' } } },
      }
    },
    156: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(14),
        r = a.n(n),
        l = a(0),
        i = a.n(l),
        o = a(4),
        c = a.n(o),
        s = a(55),
        u = a(1),
        m = function(e) {
          var t = e.location,
            a = u.default.getResourcesForPathnameSync(t.pathname)
          return i.a.createElement(
            s.a,
            r()({ location: t, pageResources: a }, a.json)
          )
        }
      ;(m.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (t.default = m)
    },
    162: function(e, t, a) {
      'use strict'
      var n = a(155),
        r = a(0),
        l = a.n(r),
        i = a(4),
        o = a.n(i),
        c = a(174),
        s = a.n(c),
        u = a(152),
        m = a(181),
        d = a.n(m),
        p = a(171),
        f = a.n(p),
        h = a(184),
        E = a.n(h),
        y = a(183),
        g = a.n(y),
        v = a(182),
        b = a.n(v),
        w = a(164),
        x = a.n(w),
        k = a(166),
        q = a.n(k)
      var P = function(e) {
          return l.a.createElement(
            q.a,
            e,
            l.a.createElement('path', {
              d:
                'M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z',
            })
          )
        },
        C = function(e) {
          var t = e.siteTitle
          return l.a.createElement(
            'div',
            null,
            l.a.createElement(
              d.a,
              { position: 'sticky', color: 'primary' },
              l.a.createElement(
                b.a,
                null,
                l.a.createElement(
                  f.a,
                  { container: !0 },
                  l.a.createElement(
                    f.a,
                    { item: !0, xs: 9 },
                    l.a.createElement(
                      x.a,
                      { variant: 'headline', color: 'inherit' },
                      l.a.createElement(
                        u.Link,
                        {
                          to: '/',
                          style: { color: 'white', textDecoration: 'none' },
                        },
                        t
                      )
                    )
                  ),
                  l.a.createElement(
                    f.a,
                    { item: !0, xs: 3 },
                    l.a.createElement(
                      g.a,
                      { href: 'http://flybase.org', 'aria-label': 'FlyBase' },
                      l.a.createElement(E.a, null)
                    ),
                    l.a.createElement(
                      g.a,
                      {
                        href: 'https://github.com/FlyBase',
                        'aria-label': 'Github',
                      },
                      l.a.createElement(P, null)
                    )
                  )
                )
              )
            )
          )
        },
        F = a(187),
        T = a.n(F),
        R = a(154),
        j = a(185),
        B = a(169),
        M = a.n(B),
        I = Object(R.createMuiTheme)({ palette: { primary: M.a } }),
        L = a(172),
        S = a(186)
      L.b.add(S.a, S.b, S.c)
      var D = j.a.main.withConfig({
          displayName: 'layout__Content',
          componentId: 'sc-1f3qdb3-0',
        })(['padding-top:20px;']),
        G = function(e) {
          var t = e.children
          return l.a.createElement(u.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return l.a.createElement(
                R.MuiThemeProvider,
                { theme: I },
                l.a.createElement(
                  s.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  l.a.createElement('html', { lang: 'en' }),
                  l.a.createElement('link', {
                    rel: 'stylesheet',
                    href:
                      'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
                  }),
                  l.a.createElement('link', {
                    rel: 'stylesheet',
                    href:
                      'https://fonts.googleapis.com/icon?family=Material+Icons',
                  }),
                  l.a.createElement('meta', {
                    name: 'viewport',
                    content:
                      'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
                  }),
                  l.a.createElement(T.a, null)
                ),
                l.a.createElement(C, { siteTitle: e.site.siteMetadata.title }),
                l.a.createElement(D, null, t)
              )
            },
            data: n,
          })
        }
      G.propTypes = { children: o.a.node.isRequired }
      t.a = G
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-1d406a4e4ff46c3533b6.js.map
