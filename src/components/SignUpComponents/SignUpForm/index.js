import React, { useState } from 'react'
import InputComponent from '../../common/Input';
import Button from '../../common/Button';

function SignUpForm() {
const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSignUp = ()=>{
    console.log("Handling Signup")
  }

  return (
    <><InputComponent
    state={fullName}
    setState={setFullName}
    placeholder="Full Name"
    type="text"
    required={true}
  />
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
  <InputComponent
    state={confirmPassword}
    setState={setConfirmPassword}
    placeholder="Confirm Password"
    type="password"
    required={true}
  />
  <Button text={"Sign Up"} onClick={handleSignUp}/>
  </>
  )
}

export default SignUpForm