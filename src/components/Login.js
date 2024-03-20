import React,{ useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogoGmail} from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Data from '../DataContext';


const Login = () => {
  const { handleLogin,setAuthPage,authPage } = useContext(Data);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openEye = document.getElementById('openEye');
  const closeEye = document.getElementById('closeEye');
  const passBox = document.getElementById('password-input');
  const openEyeListener = ()=>{
    if(openEye?.classList.contains('svg')){
      passBox.type = 'password';
      openEye.classList.toggle('svg');
      openEye.classList.toggle('remove');
      closeEye.classList.toggle('remove');
      closeEye.classList.toggle('svg');
    }
  }
  const closeEyeListener = ()=>{
    if(closeEye?.classList.contains('svg')){
      passBox.type = 'text';
      closeEye.classList.toggle('svg');
      closeEye.classList.toggle('remove');
      openEye.classList.toggle('remove');
      openEye.classList.toggle('svg');
    }
  }

  if(openEye){
    openEye.addEventListener('click',openEyeListener);
  }
  if(closeEye){
    closeEye.addEventListener('click',closeEyeListener);
  }

  if(!authPage)
  setAuthPage(true);

  return (
    <main className='signup'>
      <div className='bg-video'>
        <video width={"100%"} height={"100%"} autoPlay loop muted>
          <source src='assets/2023Recap.mp4' type='video/mp4'></source>
        </video>
      </div>
      <div className='head'>
        <Link to={'/'} onClick={()=>{setAuthPage(false)}}><img src={`${process.env.PUBLIC_URL}/assets/complexIcon.png`} alt='complex icon' /></Link>
        <h2> welcome to MakeMoments </h2>
        <img src={`${process.env.PUBLIC_URL}/assets/prototype.png`} alt='prototype' />
      </div>
      <form className='form'>
        <section>
          <h3>login</h3>
          <p id='errMsg' className='remove'></p>
          <div>
            <input type='email' name='email-input' placeholder='email' id='email-input' value={email} onChange={(e) => { setEmail(e.target.value)}} required/>
            <BiLogoGmail />
          </div>
          <div>
            <input type='password' name='password-input' placeholder='password' id='password-input' pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$' value={password} onChange={(e) =>{ setPassword(e.target.value)}} required/>
            <b>{/* this can be user for invalid password message */}</b>
            <FaRegEye className='remove' id='openEye'/>
            <FaRegEyeSlash className='svg' id='closeEye'/>
          </div>
        </section>
        <section>
          <img src={`${process.env.PUBLIC_URL}/assets/authgif.gif`} alt='signup animation'/>
          <button onClick={(event) => { handleLogin(event, email, password)}}>submit</button>
          <p>don't have an accound? <Link to={'signup'}>signup</Link></p>
        </section>
      </form>
    </main>
  )
}

export default Login;
