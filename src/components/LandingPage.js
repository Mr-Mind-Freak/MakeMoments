import React,{ useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';

const LandingPage = () => {
    const { checkRefreshToken, setUserName, setAccessToken,setProfile, setAuthPage } = useContext(Data);
    checkRefreshToken(setUserName, setAccessToken,setProfile);

    useEffect(()=>{
        setAuthPage(true);
    },[setAuthPage]);

  return (
    <main className='landing'>
      <section className='section1'>
        <h2>make moments</h2>
        <p>The enterntainment based website to explore the various entertainment categories ing ver enna nenikiromo atha eluthikalam vroo enna nu theriyala atha summa type pandren for now </p>
        <img src={`${process.env.PUBLIC_URL}/assets/rengoku.gif`} alt='rengokuGif'/>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/cornerCoin.gif`} alt='cornerCoin'/>
            <img src={`${process.env.PUBLIC_URL}/assets/vijayGun.gif`} alt='vijayGun'/>
        </div>
      </section>
      <section className='section2'>
        <h2>make moments <span>complex</span></h2>
        <p>We have seperate complex to watch movies in different types of screen with good screen quality and good sound systems to fullfill your heart and satify the brain </p>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/onepunchManFace.gif`} alt='onepunchManFace'/>
            <img src={`${process.env.PUBLIC_URL}/assets/pkBlinder.gif`} alt='pkBlinder'/>
            <img src={`${process.env.PUBLIC_URL}/assets/vijayScout.gif`} alt='vijayScout'/>
        </div>
      </section>
      <section className='section3'>
        <h2>make moments<span>complex</span></h2>
        <p>Experience the different unique screens</p>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/idScreenBg2.jpg`} alt='screen'/>
            <img src={`${process.env.PUBLIC_URL}/assets/idScreenBg2.jpg`} alt='screen'/>
            <img src={`${process.env.PUBLIC_URL}/assets/idScreenBg2.jpg`} alt='screen'/>
        </div>
      </section>
      <section className='section4'>
        <h2> make moments <span>complex</span></h2>
        <p>Buy games in both onlline {'(links)'} and offline {'(disks)'}</p>
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/DBH.jpg`} alt='DBH'/>
        </div>
        <Link to={'home'}> get started </Link>
      </section>
    </main>
  )
}

export default LandingPage;
