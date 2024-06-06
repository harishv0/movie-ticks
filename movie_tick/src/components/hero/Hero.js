import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {
    const navigate = useNavigate();
    function reviews(movieId)
    {
      navigate(`/Reviews/${movieId}`);
    }
  return (
    <div className='movies-carousel-container'>
      <Carousel>
        {
            movies?.map((movie,index) => {
                return (
                    <Paper key={index}>
                        <div className='movies-card-container'>
                            <div className='movies-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className='movies-details'>
                                    <div className='movies-poster'>
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className='movies-title'>
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className='movies-button-container'> 
                                      <Link to={`/Trailer/${movie?.trailerLink.substring(movie.trailerLink.length-11)}`} >
                                        <div className='play-button-icon-container'> 
                                            <FontAwesomeIcon className='play-button-icon'
                                              icon={faCirclePlay}/>
                                        </div>
                                        </Link>
                                        <div className='movie-review-button-container'>
                                          <Button variant = 'info' onClick={()=> reviews(movie.imdbId)}>Reviews</Button>
                                        </div>
                                    </div>



                                </div>

                            </div>

                        </div>
                    </Paper>
                )
             }  
          )
        }
      </Carousel>
    </div>
  )
}

export default Hero
