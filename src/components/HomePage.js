import React,{ useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Data from '../DataContext';
import { IoMdArrowDropright } from "react-icons/io";

const HomePage = () => {
const { setAuthPage } = useContext(Data);
  useEffect(()=>{
    setAuthPage(false);
  },[setAuthPage])
  const updateData = [
    {
      name : 'demonte colony 2',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
    {
      name : 'THE GOAT',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
    {
      name : 'godzila and kong',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
    {
      name : 'demon slayer hashira training arc',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
    {
      name : 'black clover 5',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
    {
      name : 'jujutsu kaisen 3',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
    {
      name : 'mrs. marvels',
      poster : '',
      actor : 'arulnithi',
      actress : 'priya',
      director : 'sam',
      music : 'yuvan'
    },
  ];
  let [ count, setCount ] = useState(0);
  const [ movieName, setMovieName ] = useState(updateData[count].name);
  const [ poster, setPoster ] = useState(updateData[count].poster);
  const [ actor, setActor ] = useState(updateData[count].actor);
  const [ actress, setActress ] = useState(updateData[count].actress);
  const [ director, setDirector ] = useState(updateData[count].director);
  const [ music, setMusic ] = useState(updateData[count].music);

  return (
    <main className='homePage'>
      <section className='updates'>
        <img src={poster} alt='updateBackground' />
        <h2> updates </h2>
        <div className='container'>
          <img src={poster} alt={updateData[count].name} />
          <div className='details'>
            <h3>{ movieName }</h3>
            <p> actor : { actor } </p>
            <p> actress : { actress} </p>
            <p> director : { director} </p>
            <p> music : { music} </p>
            <Link to={'updates'}>see all{'>>'}</Link>
          </div>
          <IoMdArrowDropright onClick={()=>{ 
            if(count > updateData.length){
              setCount(0);
              setMovieName(updateData[count].name);
              setPoster(updateData[count].poster);
              setActor(updateData[count].actor);
              setActress(updateData[count].actress);
              setDirector(updateData[count].director);
              setMusic(updateData[count].music);
            }
            else{
              setCount(++count);
              setMovieName(updateData[count].name);
              setPoster(updateData[count].poster);
              setActor(updateData[count].actor);
              setActress(updateData[count].actress);
              setDirector(updateData[count].director);
              setMusic(updateData[count].music);
            }
          }}/>
        </div>
      </section>
      <section className='searchBox'>
        <input type='text' id='searchBox'/>
      </section>
      <section className='movies'>
        <h2> movies </h2>
        <div className='kollywood'>
            <h3> kollywood </h3>
            <div>
                <img src={''} alt='movie1' />
            </div>
            <div>
                <img src={''} alt='movie2' />
            </div>
            <div>
                <img src={''} alt='movie3' />
            </div>
            <div>
                <img src={''} alt='movie4' />
            </div>
            <div>
                <img src={''} alt='movie5' />
            </div>
        </div>
        <div className='allMovies'>
            <h3> allmovies </h3>
            <div>
                <img src={''} alt='movie1' />
            </div>
            <div>
                <img src={''} alt='movie2' />
            </div>
            <div>
                <img src={''} alt='movie3' />
            </div>
            <div>
                <img src={''} alt='movie4' />
            </div>
            <div>
                <img src={''} alt='movie5' />
            </div>
        </div>
        <Link to={'movies'}>see all{'>>'}</Link>
      </section>
      <div id='onepunchmanEye'></div>
      <section className='animes'>
        <h2> animes </h2>
        <div className='anime'>
            <div>
                <img src={''} alt='anime1' />
            </div>
            <div>
                <img src={''} alt='anime2' />
            </div>
            <div>
                <img src={''} alt='anime3' />
            </div>
            <div>
                <img src={''} alt='anime4' />
            </div>
            <div>
                <img src={''} alt='anime5' />
            </div>
        </div>
        <Link to={'movies'}>see all{'>>'}</Link>
      </section>
    </main>
  )
}

export default HomePage
