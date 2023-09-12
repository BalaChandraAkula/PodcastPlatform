import React, { useState } from 'react'
import InputComponent from '../../common/Input';
import Button from '../../common/Button';
import { auth, db, storage} from "../../../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth"
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from "../../../slices/userSlice"
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async ()=>{
    console.log("Handling Signup");
    if(password==confirmPassword && password.length>=6){
      try {
        //Creating users account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
        console.log("User", user)

        //saving users details
        await setDoc(doc(db, "users", user.uid),{
          name: fullName,
          email: user.email,
          uid:user.uid,
          // profilePic: fileURL,
        });

        //Save data in redux, call the redux action
        dispatch(setUser({
          name : fullName,
          email : user.email,
          uid : user.uid
        }));

        navigate("/profile");
      }catch(e){
        console.log("error", e);
      }
    }else{

    }
    
  };

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