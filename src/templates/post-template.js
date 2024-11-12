import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout";

const PostTemplate = ({ data: { mdx }, children }) => {
  const postImage = getImage(mdx.frontmatter.postImage)

  return (
    <Layout>
      <div class="w-1/2 flex flex-col mx-auto my-12 gap-8">
        <h1
          className="font-semibold text-4xl"
        >
          {mdx.frontmatter.title}
        </h1>

        <h2
          className="font-semibold text-[#4f5257]"
        >
          {mdx.frontmatter.subtitle}
        </h2>

        <div 
          className="flex gap-4"
        >
          <div
            className="w-[50px] w-[50px]"
          >
            <img
              src={mdx.frontmatter.authorImage}
              className="w-full h-full"
              alt="Author"
            />
          </div>

          <div>
            <div className="font-semibold">
              {mdx.frontmatter.author}
            </div>
            <div className="text-[#979797] text-sm">
              {mdx.frontmatter.date}
            </div>
          </div>
        </div>

        <div>
          <GatsbyImage image={postImage} alt="Post image" />
        </div>

        <MDXProvider>
          {children}
        </MDXProvider>
      </div>

      <dix>

      </dix>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        author
        authorImage
        postImage {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              height: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

export default PostTemplate;
