import React from 'react'
import Blog from '../../Components/blog/Blog'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function BlogPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog List</title>
      </Helmet>
      <PageContainer>
      <Blog />
      </PageContainer>
    </>
  )
}

export default BlogPage