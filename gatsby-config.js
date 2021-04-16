module.exports = {
  siteMetadata: {
    title: "twistnshout",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: false,
      }
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     commonmark: true,
    //     footnotes: true,
    //     pedantic: true,
    //     gfm: true,
    //     plugins: [],
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: `https://twistandshoutevents.com/graphql`,
      }
    },
    {
      resolve:`gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true }
    },
    `gatsby-plugin-sass`,
    // `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-gatsby-cloud`,
  ],
};
