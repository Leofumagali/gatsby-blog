import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PostCard = ({ title, subtitle, image, date, slug }) => {

  return (
    <>
      <Link
        to={`/post/${slug}`}
        className="flex flex-col w-[350px] bg-[#f0f0f0] bg-block rounded-2xl overflow-hidden cursor-pointer justify-start"
      >
        <GatsbyImage
          image={image}
        />
        <div className="flex flex-col h-[120px] justify-between p-4">
          <h1 className="font-semibold">
            {title}
          </h1>
          <p>{subtitle}</p>
          <p className="text-xs text-right selftext-[#4f5257] mt-auto">{date}</p>
        </div>
      </Link>
    </>
  )
}

export default PostCard;