import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';

const Header = () => {
  const { userName } = useContext(Data);
  return (
    <header className='header' id='header'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/complexIcon.png`} alt='makemoments' title='MakeMoments'className='logo'/>
        <h3>MakeMoments<span>complex</span></h3>
      </div>
      <nav>
        <Link to={'/'}>
          <img src={`${process.env.PUBLIC_URL}/assets/homeIcon.svg`} alt='home' />
          <p>home</p>
        </Link>
        <Link to={'AllMovies'}>
          <img src={`${process.env.PUBLIC_URL}/assets/movieIcon.svg`} alt='movies' />
          <p>movies</p>
        </Link>
        <Link to={'AllAnimes'}>
          <img src={`${process.env.PUBLIC_URL}/assets/animeIcon.svg`} alt='anime' />
          <p>anime</p>
        </Link>
        <Link to={'AllGames'}>
          <img src={`${process.env.PUBLIC_URL}/assets/gameIcon.svg`} alt='game' />
          <p>games</p>
        </Link>
        <button>
          <img src={`${process.env.PUBLIC_URL}/assets/userIcon.svg`} alt='user' />
          { userName ? <p> {userName} </p> : <Link to={'login'}>Log in</Link>}
        </button>
        <Link to={'notification'}>
          <img src={`${process.env.PUBLIC_URL}/assets/notificationIcon.svg`} alt='notification' />
          <p>notification</p>
        </Link>
        <Link to={'about'}>
          <img src={`${process.env.PUBLIC_URL}/assets/aboutIcon.svg`} alt='notification' />
          <p>about us</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
