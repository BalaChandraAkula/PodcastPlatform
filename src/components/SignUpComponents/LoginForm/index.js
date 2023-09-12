import React, { useState } from 'react'
import InputComponent from '../../common/Input';
import Button from '../../common/Button';

function LogInForm() {

  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  

  const handleLogin = ()=>{
    console.log("Handling Login")
  }

  return (
    <>
  <InputComponent
    state={email}
    setState={setEmail}
    placeholder="Email"
    type="text"
    required={true}
  />
  <InputComponent
    state={password}
    setState={setpassword}
    placeholder="Password"
    type="password"
    required={true}
  />
  <Button text={"Log In"} onClick={handleLogin}/>
  </>
  )
}

export default LogInForm