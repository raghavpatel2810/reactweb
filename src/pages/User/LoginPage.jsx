import React from 'react'
import Login from '../../Components/User/Login'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function LoginPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Login</title>
      </Helmet>
      <PageContainer>
      <Login />
      </PageContainer>
    </>
  )
}

export default LoginPage