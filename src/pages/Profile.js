import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import {toast} from "react-toastify"

function Profile() {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  if(!user){
    return <p>Loading...</p>
  }

  const handleLogout =()=>{
    signOut(auth).then(()=>{
      toast.success("User Logged OUt!")
    }).catch((error)=>{
      toast.error(error.message);
    });
  };

  return (
    <div>
      <Header />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
      <Button text={"Logout"} onClick={handleLogout}/>
    </div>
  )
}

export default Profile;