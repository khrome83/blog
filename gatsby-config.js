module.exports = {
  siteMetadata: {
    title: 'Zane Milakovic\'s Terrible Code Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-jsx-postcss',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
