import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="post" key={node.id}>
          <Link to={node.fields.slug} className="post-link">
            <h3>
              {node.frontmatter.title}{" "}
              <span className="date">— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <style jsx>{`
      .post {
        margin-bottom: 2rem;
      }

      .post-link {
        text-decoration: none;
        color: inherit;
      }

      .date {
        color: #f0f0f0;
      }
    `}</style>
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
