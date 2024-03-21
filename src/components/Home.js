import React,{ useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Data from '../DataContext';
import { IoMdArrowDropright } from "react-icons/io";


const Home = async () => {
  const { movies, updates, animes, setUpdates, setMovies, setAnimes } = useContext(Data);
  async function loadData(){
    try {
      const res = await axios.get('http://localhost:3500/movies');
      if(res && res.data) {
        res.data.forEach( movie => {
          if(movie.hashTags.toLowerCase() === "#updates") setUpdates([...updates, movie]);
          else if(movie.hashTags.toLowerCase() === "#anime") setAnimes([...animes, movie]);
          else setMovies([...movies, movie]);
        });
      }
    } catch (err) {
      console.log(`Error message : ${err.message}`);
    }
  }
  loadData();
  console.log(updates);
  let kollywood = [];
  let otherMovies = [];
  movies.forEach( movie => {
    if(movies.hashTags.toLowerCase() === "#kollywood")
      kollywood.push(movie);
    else
      otherMovies.push(movie)
  }); 
  const [ updatesImage , setUpdateImage ] = useState('');
  console.log(updates);
  if(updates.posters[0])
    setUpdateImage(updates.posters[0]);
  return (
    <main className='homePage'>
      <section className='updates'>
        <img src={updatesImage} alt='update background' />
        <h3> updates </h3>
        { 
          updates ?
          updates.map(( update )=>{
            return(
              <div className='container'>
                <img src={updatesImage} alt={update.name} />
                <div className='detais'>
                  <h4> {update.name} </h4>
                  <p> category : { update.category[0]}</p>
                  <p> no of likes : {update.votes} </p>
                  <Link to={''}>see all</Link>
                </div>
                <IoMdArrowDropright className='right-Arrow'/>
              </div>
            )
          }) :
          <div className='container'>
            <img src={updatesImage} alt='updateImage' />
            <div className='details'>
              <h4> demonte colony 2</h4>
              <p> actor : Arulnithi </p>
              <p> actress : priya bhavani shankar</p>
              <Link to={''}>see all</Link>
            </div>
            <IoMdArrowDropright className='right-arrow' />
          </div>
        }
      </section>
      <section className='searchBox'>
        <input type='text' id='searchBox'/>
      </section>
      <secion className='movies'>
        <h3> movies </h3>
        <div className='kollywood'>
          <h4> kollywood </h4>
          {
            kollywood.map(( movie )=>{
              return(
                <div className='container'>
                  <img src={movie.poster[0]} alt={movie.name} />
                </div>
              )
            })
          }
        </div>
        <div className='allMovies'>
          <h4> allmovies</h4>
          {
            otherMovies.map(( movie )=>{
              return(
                <div className='container'>
                  <img src={movie.poster[0]} alt={movie.name} />
                </div>
              )
            })
          }
          <Link to={''}> see all {'>>'}</Link>
        </div>
      </secion>
    </main>
  )
}

export default Home;
