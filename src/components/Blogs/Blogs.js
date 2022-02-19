import React from "react"
import BlogSnippets from "./BlogSnippets/BlogSnippets"
import blogSnippets from "../../assets/blogs/blogSnippets"

const reverseOrderofBlogSnippets = blogSnippets
  .slice(0)
  .reverse()
  .map((blogSnippet, i) => {
    return (
      <React.Fragment key={i}>
        <BlogSnippets
          i={blogSnippet.id}
          image={blogSnippet.image}
          title={blogSnippet.title}
          text={blogSnippet.tagline}
        />
      </React.Fragment>
    )
  })

const Blogs = () => {
  return (
    <div className="blogs relative flex justify-center items-start h-full w-screen">
      <div className="w-9/12 flex md:w-full flex-col">
        <h1 className="text-5xl md:mr-20 md:ml-64 dark:text-white text-clr-bg hero-header py-7">
          Musings
        </h1>
        <hr className="w-9/12 md:mr-20 md:ml-64 border-2 border-clr-skin" />
        <div className="flex flex-wrap justify-center py-10 md:mx-10">
          {reverseOrderofBlogSnippets}
        </div>
      </div>
    </div>
  )
}

export default Blogs
