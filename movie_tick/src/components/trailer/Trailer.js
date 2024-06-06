import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
// import './Trailer.css';
import React, { useEffect, useState } from 'react';

const Trailer = () => {
    const[key, setKey] = useState();
    const params = useParams();

    useEffect(() => {
        // Update the key state when the component mounts or when the params change
        setKey(params.ytTrailerId);
        console.log(params.ytTrailerId)
    }, [params.ytTrailerId]);
    
  return (
    <div className="react-player-container">
    {key && (
      <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
      />
  )}

    </div>
  )
}

export default Trailer
