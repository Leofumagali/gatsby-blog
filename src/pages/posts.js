import * as React from "react";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

export const Head = () => <title>Posts</title>

const Posts = ({ data }) => {
  const allPosts = data.allMdx.nodes;

  return (
    <Layout>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto py-12">
        <h1
          className="font-semibold text-4xl"
        >
          Posts
        </h1>
        <div className="w-full flex flex-wrap gap-8 mx-auto">
          {allPosts.map((post) => {
            const image = getImage(post.frontmatter.postImage);
            return (
              <PostCard
                key={post.id}
                title={post.frontmatter.title}
                subtitle={post.frontmatter.subtitle}
                date={post.frontmatter.date}
                image={image}
                slug={post.frontmatter.slug}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM DD, YYYY")
          slug
          postImage {
          childImageSharp {
            gatsbyImageData(
              width: 500
              height: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        }
      }
    }
  }
`;

export default Posts;

