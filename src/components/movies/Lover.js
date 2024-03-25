import React, { useContext } from 'react';
import Data from '../../DataContext';
import { useNavigate } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";

const Lover = () => {
  const { userName,fetchScreenData } = useContext(Data);
  const navigate = useNavigate();

  const handleBookNow = () => {
    if(!userName) navigate('/login');
    fetchScreenData();
    navigate('/book');
  }

  return (
    <main className='movie'>
      <section>
        <img src='' alt='moviePoster' />
        <div>
          <div>
            <h2> LOVER </h2>
            <p> 2D</p>
            <p> TAM </p>
          </div>
          <div>
            <p> DRAMA, ROMANTIC (UA) </p>
            <p> 2h 30min</p>
            <p> 
              After six years of love, longing and togetherness, Arun and Divya start to drift apart. Will their love endure their differences, or does love need to endure so much?
            </p>
            <div>
              <p> 
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </p>
              <p> 3/5[Reviews]</p>
              <button> RATE NOW </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <img src='' alt='posers' />
        <img src='' alt='posers' />
        <img src='' alt='posers' />
      </section>
      <section>
        <div>
          <h4> CAST </h4>
          <figure>
            <img src='' alt='cast' />
            <figcaption> Manikandan k. <span>Actor</span></figcaption>
          </figure>
          <figure>
            <img src='' alt='cast' />
            <figcaption> Sri Gouri Priya <span>Actress</span></figcaption>
          </figure>
          <figure>
            <img src='' alt='cast' />
            <figcaption> Kanna Ravi <span>Comedian</span></figcaption>
          </figure>
        </div>
        <div>
          <h4> CREW </h4>
          <figure>
            <img src='' alt='cast' />
            <figcaption> Prabhuram Vyas <span>Director</span></figcaption>
          </figure>
          <figure>
            <img src='' alt='cast' />
            <figcaption> Sean Roldan <span>Music</span></figcaption>
          </figure>
          <figure>
            <img src='' alt='cast' />
            <figcaption> Shreyaas Krishna <span>Cinematography</span></figcaption>
          </figure>
        </div>
      </section>
      <section>
        <div>
          <figure>
            <img src='' alt='userPic' />
            <figcaption> Vishnu kumar </figcaption>
          </figure>
          <p>
          POR is a political campus drama that is written and directed by Bejoy Nambiar. The film is co written by Neil Julian Balthazar and Mithila Hegde. Madhu Alexander, Prabhu Antony and Bejoy Nambiar produce this film.
          </p>
          <p>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </p>
        </div>
        <div>
          <figure>
            <img src='' alt='userPic' />
            <figcaption> Navaneethan </figcaption>
          </figure>
          <p>
          POR is a political campus drama that is written and directed by Bejoy Nambiar. The film is co written by Neil Julian Balthazar and Mithila Hegde. Madhu Alexander, Prabhu Antony and Bejoy Nambiar produce this film.
          </p>
          <p>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </p>
        </div>
        <div>
          <figure>
            <img src='' alt='userPic' />
            <figcaption> Mind Freak </figcaption>
          </figure>
          <p>
          POR is a political campus drama that is written and directed by Bejoy Nambiar. The film is co written by Neil Julian Balthazar and Mithila Hegde. Madhu Alexander, Prabhu Antony and Bejoy Nambiar produce this film.
          </p>
          <p>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </p>
        </div>
      </section>
      <button onClick={handleBookNow}> BOOK NOW </button>
    </main>
  )
}

export default Lover;
