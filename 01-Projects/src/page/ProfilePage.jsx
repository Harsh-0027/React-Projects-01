import React from 'react'
import ProfileImage from '../Components/ProfileImage'
import UserInfo from '../Components/UserInfo'
import Bio from '../Components/Bio'
import Social from '../Components/Social'

const ProfilePage = () => {
  return (
    <div>
        <ProfileImage/>
        <UserInfo/>
        <Bio/>
        <Social/>
    </div>
  )
}

export default ProfilePage