import React from 'react'
import Registration from '../../Components/User/Registration'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function RegistrationPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Signup</title>
      </Helmet>
      <PageContainer>
      <Registration />
      </PageContainer>
    </>
  )
}

export default RegistrationPage