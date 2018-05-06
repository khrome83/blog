import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <form method="POST" action="https://api.staticman.net/v2/entry/khrome83/blog/master">
        <input name="options[redirect]" type="hidden" value="localhost:8000" />
        <input name="options[slug]" type="hidden" value={post.fields.slug.slice(1, -1)} />
        <label><input name="fields[name]" type="text" />Name</label>
        <label><input name="fields[email]" type="email" />E-mail</label>
        <label><textarea name="fields[message]"></textarea>Message</label>
        <button type="submit">Go!</button>
      </form>
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
  }
`;
