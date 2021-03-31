module.exports = {
  siteMetadata: {
    title: "twistnshout",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        // modulePath: `${__dirname}/src`
      }
    }
  ],
};
