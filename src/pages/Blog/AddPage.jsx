import React from 'react'
import AddBlog from '../../Components/blog/AddBlog'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function AddPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Add</title>
      </Helmet>
      <PageContainer>
      <AddBlog />
      </PageContainer>
    </>
  )
}

export default AddPage