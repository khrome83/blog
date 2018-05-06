module.exports = {
  siteMetadata: {
    title: 'Zane Milakovic\'s Terrible Code Blog',
    author: 'Zane Milakovic',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-jsx-postcss',
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `comments`,
        path: `${__dirname}/src/_data/comments/`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
