# 📝 Gatsby MDX Blog #
### A modern blog built with Gatsby, React, and MDX. This project leverages the power of Gatsby for fast static site generation, MDX for combining Markdown with React components, and TailwindCSS for responsive design. ###

#### 🌟 Features

MDX Integration: Write blog posts in Markdown with embedded React components for interactivity.

Responsive Design: Styled with TailwindCSS, ensuring a seamless experience on all devices.

Optimized Images: Uses Gatsby’s image processing capabilities for fast-loading, optimized images in WebP format.

Dynamic Routing: Automatically generates routes for each post.

Netlify Ready: Optimized for deployment on Netlify with environment-based configuration.

#### 🚀 Getting Started
Prerequisites
Node.js (recommended version: 16.19.0)
Gatsby CLI (optional, but recommended for running Gatsby commands)

##### Installation

Clone the repository:

`git clone https://github.com/Leofumagali/gatsby-blog.git`
`cd gatsby-blog`

Install dependencies:

`npm install`

Start the development server:

`npm run develop`
Open your browser and visit http://localhost:8000 to see the blog in action.

#### Project Structure
content/posts/: Directory for MDX posts. Each post can have its own folder with images and other media.
src/components/: Reusable components for the blog.
src/templates/: Templates for dynamic pages like blog posts.
gatsby-config.js: Configuration file for plugins and site metadata.

#### Adding Posts
To add a new post, create a new .mdx file in the content/posts/ directory. Example structure:

    content/
    └── posts/
        └── my-first-post/
            ├── index.mdx
            └── image.jpg
        

In index.mdx, you can add frontmatter for metadata and write your Markdown content with embedded React components.

Example:

---
title: "My First Post"
subtitle: "My first subtitle"
date: "2024-11-13"
author: "Author Name"
authorImage: "URl to author's image"
slug: "my-first-post"
---

# Welcome to My Blog Post

This is a **sample post** written in MDX!

#### 📚 Technologies Used
Gatsby: Framework for fast, optimized static sites.
React: JavaScript library for building user interfaces.
MDX: Combines Markdown and JSX to enable interactive content.
TailwindCSS: Utility-first CSS framework for responsive design.
Netlify: Platform for easy deployment and hosting.

#### 📄 License
This project is licensed un