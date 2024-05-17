import React from 'react'
import EditBlog from '../../Components/blog/EditBlog'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function BlogEditPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Edit</title>
      </Helmet>
      <PageContainer>
      <EditBlog />

      </PageContainer>
    </>
  )
}

export default BlogEditPage