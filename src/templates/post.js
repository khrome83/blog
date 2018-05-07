import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  let comments = [];

  if (data.allCommentsYaml) {
    comments = data.allCommentsYaml.edges.map(({node: { name, comment, date }}) => (
      <div>
        <span>{ name }</span> -
        <span>{ date }</span>
        <p>{ comment }</p>
      </div>
    ));
  }

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <form method="POST" action="https://api.staticman.net/v2/entry/khrome83/blog/master/comments">
        <input name="options[redirect]" type="hidden" value="localhost:8000" />
        <input name="fields[slug]" type="hidden" value={post.fields.slug} />
        <label><input name="fields[name]" type="text" />Name</label>
        <label><input name="fields[email]" type="email" />E-mail</label>
        <label><textarea name="fields[comment]"></textarea>Message</label>
        <button type="submit">Go!</button>
      </form>
      { comments }
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    allCommentsYaml(filter: { slug: { eq: $slug } }, sort: { fields: [date], order: DESC }) {
      edges {
        node {
          name
          comment
          date
        }
      }
    }
  }
`;
