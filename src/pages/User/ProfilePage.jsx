import React from 'react'
import Profile from '../../Components/User/Profile'
import { Helmet } from "react-helmet";
import PageContainer from '../../Components/Layout/PageContainer'

function ProfilePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Profile</title>
      </Helmet>
      <PageContainer>
      <Profile />
      </PageContainer>
    </>
  )
}

export default ProfilePage