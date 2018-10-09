module.exports = {
  siteMetadata: {
    title: "FlyBase for Developers",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#036",
        theme_color: "#036",
        display: "minimal-ui",
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/docs.js"),
        },
        extensions: [".mdx", ".md"],
        mdPlugins: [require("remark-toc")],
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-autolink-headers" }],
      },
    },
    "gatsby-plugin-styled-components",
  ],
}
