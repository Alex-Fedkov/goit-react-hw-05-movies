import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const Reviews = () => {
const { movieId } = useParams();
const [reviews, setReviews] = useState([]); 
const [status, setStatus] = useState(null);
const [error, setError] = useState(null);
    
useEffect(() => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cfb2a4b5cdc00428d1d82e24b55ad28d`;       
  setStatus(Status.PENDING);
  if (!movieId) return;

fetch(URL).then(response => {
  if (response.ok) {         
    return response.json();
  }
    return Promise.reject(new Error('Error!'))
})
.then(({results}) => {         
  setReviews(results);
  setStatus(Status.RESOLVED);       
})
.catch(error => {
  setError(error);
  setStatus(Status.REJECTED);
});   
}, [movieId]) 
  
return (
  <div>
    {status === Status.REJECTED && (<div>{error.message}</div>)}
    {status === Status.PENDING && <Loader />}
    {reviews.length ? (<ul>
      {reviews.map(review => {
        return <li key={review.id}>
          <b>Author: {review.author}</b>
          <p>{review.content}</p>
          </li>
      })}
    </ul>  
    ):<p>No information found!</p>}   
  </div>
);
};

export default Reviews;
