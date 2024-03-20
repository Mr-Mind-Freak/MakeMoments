import React,{ useContext } from 'react';
import Data from '../DataContext';

const Home = () => {
  const { profile } = useContext(Data);
  return (
    <div>
      movie
      { profile ? <img src={`data:image/jpg;base64,${profile}`} alt='profile'/> : <p>summa</p>}
    </div>
  )
}

export default Home;
