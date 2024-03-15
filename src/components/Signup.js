import React from 'react';
import { Link } from 'react-router-dom';
import { LuUser2 } from "react-icons/lu";
import { BiLogoGmail} from "react-icons/bi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { AiTwotonePhone } from "react-icons/ai";

const removeHeader = () => {
  const header = document.getElementById('header');
  if(header)
    header.remove();
}

const Signup = () => {
  removeHeader();
  return (
    <main className='signup'>
      <h1>make moments <p>complex</p></h1>
      <div className='complexIcon'>
        <img src='assets/icon.png' alt='complex icon' />
      </div>
      <form>
        <div className='sideBlue'></div>
        <div className='topBall'>
          <img src='assets/authBoll.gif' alt='animation_Ball'/>
        </div>
        <section>
          <h2>signup</h2>
          <div>
            <input type='text' name='userName-input' id='userName-input' />
            <LuUser2 />
          </div>
          <div>
            <input type='password' name='password-input' id='password-input' />
            <FaRegEye className='add-inlineblock'/>
            <FaRegEyeSlash className='remove' />
          </div>
          <div>
            <input type='email' name='email-input' id='email-input' />
            <BiLogoGmail />
          </div>
          <div>
            <input type='tel' name='phoneno-input' id='phoneno-input' />
            <AiTwotonePhone />
          </div>
          <div>
          <input type="file" name='profile-input' id='profile-input' accept="image/jpeg" />
          </div>
        </section>
        <section>
          <div>
            <img src='assets/authgif.gif' alt='signup animation'/>
          </div>
          <button>submit</button>
          <p>already have an accound? <Link to={''}>login</Link></p>
        </section>
        <div className='bottomBall'>
          <img src='assets/authBoll.gif' alt='animation_Ball'/>
        </div>
      </form>
    </main>
  )
}

export default Signup;
