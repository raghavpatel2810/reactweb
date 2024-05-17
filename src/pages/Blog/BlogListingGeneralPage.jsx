import React from 'react'
import BlogListingGeneral from '../../Components/blog/BlogListingGeneral'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function BlogListingGeneralPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog List</title>
      </Helmet>
      <PageContainer>
      <BlogListingGeneral />
      </PageContainer>
    </>
  )
}

export default BlogListingGeneralPage