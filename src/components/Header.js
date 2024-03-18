import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';

const Header = () => {
  const { userName } = useContext(Data);
  return (
    <header className='header' id='header'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/logo.jpg`} alt='makemoments' title='MakeMoments'className='logo'/>
        <h3>MakeMoments</h3>
      </div>
      <nav>
        <Link to={'movies'}>Movies</Link>
        <Link to={'animes'}>Animes</Link>
        <Link to={'games'}>Games</Link>
        <Link to={'info'}>info</Link>
        <Link to={'about'}>About Us</Link>
        { userName ? <p> {userName} </p> : <Link to={'login'}>Log in</Link>}
      </nav>
    </header>
  )
}

export default Header;
