import React from 'react'
import { useSelector } from 'react-redux'
import Profile from './profile';

 const Profiles=()=> {
    const profiles = useSelector((state)=>state.profiles)
    console.log(profiles)
  return (
    <div>
        <Profile/>
    </div>
  )
}
export default Profiles
