import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';
import apiConfig from '../../api/apiConfig';

const Reviews = ({getMoviesData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const moviesId = params.moviesId;

    useEffect(()=>{
        getMoviesData(moviesId);
    },[])

    const addReview = async (e)=>{
        e.preventDefault();

        const rev = revText.current;
        try{
        const response = await apiConfig.post("/api/v1/reviews", {reviewBody:rev.value,imdbId:moviesId});
        const updateReviews = [...reviews,{body:rev.value}];
        rev.value = "";

        setReviews(updateReviews);
        }
        catch(err)
        {
            console.error(err);
        }
    }

   return (
    <Container>
        <Row className='mt-2'>
            <Col>
                <img src={movie?.poster} alt='' />
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm  handleSubmit={addReview} revText={revText} labelText="Write a Review" />

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr/>    
                            </Col>
                        </Row>
                    </>

                
                }
                {
                    reviews?.map((r)=>{
                        return(
                            <>
                                <Row>
                                    <Col>{r.body} </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr/>
                                    </Col>
                                </Row>
                            </>
                        )
                    }
                    )
                }
            </Col>
        </Row>
        <Row>
               <Col>
                   <hr />
               </Col>
           </Row>
    </Container>
  )
}

export default Reviews
