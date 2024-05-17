import React from 'react'
import BlogDetail from '../../Components/blog/BlogDetail'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function BlogDetailPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Details</title>
      </Helmet>
      <PageContainer>
      <BlogDetail />
      </PageContainer>
    </>
  )
}

export default BlogDetailPage