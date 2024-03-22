import React, { useEffect, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Data = createContext({});
axios.defaults.withCredentials = true;
const checkRefreshToken = async ( setUserName ,setAccessToken, setProfile)=>{
  try {
    const res = await axios.get('http://localhost:3500/refresh');
    if(res && res.data) {
      setUserName(res.data['username']);
      setAccessToken(res.data['accessToken'])
      setProfile(res.data['profile']);
    }
  } catch (err) {
    if(err.response){
      console.log(err.response.data.message);
      console.log(err.response.status);
    }
  }
}

const errorBoxModifier = (err) => {
  const errElemt =  document.querySelector('#errMsg');
  if(err.response){
    errElemt.innerHTML = `<span>${err.response.status}</span>${err.response.data.message}`
    errElemt.classList.remove('remove');
    errElemt.classList.add('add-block');
    errElemt.classList.add('errorBox');
    console.log(err.response.data.message);
    console.log(err.response.status);
  } else {
    errElemt.textContent = `Error : ${err.message}`;
  }
}

export const DataContext = ({ children }) => {
  const navigate = useNavigate();
  let [userName,setUserName] = useState(null);
  let [ accessToken, setAccessToken ] = useState(null);
  let [ authPage, setAuthPage ] = useState(false);
  let [ profile, setProfile ] = useState(null);
  
  
  const successAuthentication = (name, atoken, pic) =>{
    setUserName(name);
    setAccessToken(atoken);
    setProfile(pic);
    setAuthPage(false);
  }

  useEffect(()=>{
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    if(authPage){
      if(header?.classList.contains('header')){
        header.classList.toggle('header');
        header.classList.toggle('remove');
      }
      if(footer?.classList.contains('footer')){
        footer.classList.toggle('footer');
        footer.classList.toggle('remove');
      }
    } else {
      if(header?.classList.contains('remove')){
        header.classList.toggle('remove');
        header.classList.toggle('header');
      }
      if(footer?.classList.contains('remove')){
        footer.classList.toggle('remove');
        footer.classList.toggle('footer');
      }
    }
  },[authPage]);

  const handleSignup = async (event, name, password, email, phone) => {
    event.preventDefault();
    const profile = document.getElementById('profile-input');
    if(!profile.files || !name || !password || !email ){
      alert('All fields are required');
      window.location.reload();
      return;
    }
    let bodyForm = new FormData();
    bodyForm.append('username', name);
    bodyForm.append('email',email);
    bodyForm.append('phoneno',phone);
    bodyForm.append('password',password);
    bodyForm.append('image',profile.files[0]);
    try {
      const res = await axios.post('http://localhost:3500/register',bodyForm);
      if(res && res.data) {
        successAuthentication(res.data['username'],res.data['accessToken'],res.data['profile']);
        navigate('/');
      }
    } catch (err) {
      errorBoxModifier(err);
    }
  }

  const handleLogin = async(event,email,password) =>{
    event.preventDefault();
    if(!email || !password) {
      alert('All fields are required');
      window.location.reload();
      return;
    }
    try {
      const res = await axios.post('http://localhost:3500/auth',{ email: email, password: password});
      if(res && res.data) {
        successAuthentication(res.data['username'],res.data['accessToken'],res.data['profile']);
        navigate('/');
      }
    } catch (err) {
      errorBoxModifier(err);
    }
  }

  return (
    <Data.Provider value={{ 
        userName, setUserName, accessToken, setAccessToken,
        handleSignup, handleLogin, authPage, setAuthPage,
        profile, setProfile, checkRefreshToken
    }}>
      { children }
    </Data.Provider>
  )
}

export default Data;