import React from 'react';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  return (
    <main className='allMovie'>
      <h1> M O V I E S </h1>
      <section className='container'>
        <div className='heading'>
          <h2> KOLLYWOOD </h2>
          <img src='' alt='bookAnimation' />
        </div>
        <div className='contents'>
          <div>
            <img src='' alt='' />
            <div className='details'>
              <h3> LOVER </h3>
              <p> DRAMA, ROMANTIC (UA) </p>
              <p> 2h 30min</p>
              <p> 
                After six years of love, longing and togetherness, Arun and Divya start to drift apart. Will their love endure their differences, or does love need to endure so much?
              </p>
            </div>
            <Link to={'lover'}> BOOK TICKETS </Link>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='heading'>
          <h2> BOLLYWOOD </h2>
          <img src='' alt='bookAnimation' />
        </div>
        <div className='contents'>
          <div>
            <img src='' alt='' />
            <div className='details'>
              <h3> SHAITAAN </h3>
              <p> HORROR, ACTION (UA) </p>
              <p> 2h 30min</p>
              <p> 
                After six years of love, longing and togetherness, Arun and Divya start to drift apart. Will their love endure their differences, or does love need to endure so much?
              </p>
            </div>
            <Link to={'lover'}> BOOK TICKETS </Link>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='heading'>
          <h2> MOLLYWOOD </h2>
          <img src='' alt='bookAnimation' />
        </div>
        <div className='contents'>
          <div>
            <img src='' alt='' />
            <div className='details'>
              <h3> MANJUMMEL BOYS </h3>
              <p> ADVENTURE, THRILLER </p>
              <p> 2h 30min</p>
              <p> 
                After six years of love, longing and togetherness, Arun and Divya start to drift apart. Will their love endure their differences, or does love need to endure so much?
              </p>
            </div>
            <Link to={'lover'}> BOOK TICKETS </Link>
          </div>
        </div>
      </section>
      <section className='container'>
        <div className='heading'>
          <h2> ANIME </h2>
          <img src='' alt='bookAnimation' />
        </div>
        <div className='contents'>
          <div>
            <img src='' alt='' />
            <div className='details'>
              <h3> HASHIRA TRAINING ARC </h3>
              <p> ADVENTURE, THRILLER </p>
              <p> 2h 30min</p>
              <p> 
                After six years of love, longing and togetherness, Arun and Divya start to drift apart. Will their love endure their differences, or does love need to endure so much?
              </p>
            </div>
            <Link to={'lover'}> BOOK TICKETS </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AllMovies;
