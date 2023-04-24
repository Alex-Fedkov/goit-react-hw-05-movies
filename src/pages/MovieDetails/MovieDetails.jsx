import { Suspense, useEffect, useState } from "react";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { 
  Box, 
  Button,
  Subtitle,
  Card,
  Text,
  TextGen,
  DivList,
} from "./styles"

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const MoviesDetails = () => {
  const { movieId } = useParams();  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [score, setScore] = useState(null);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  
useEffect(() => {
const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cfb2a4b5cdc00428d1d82e24b55ad28d`;        
setStatus(Status.PENDING);
if (!movieId) return;

fetch(URL).then(response => {
  if (response.ok) {         
    return response.json();
  }
    return Promise.reject(new Error('Error!'))
})
.then((data) => {           
  setPoster(data['poster_path']);
  setTitle(data.title);
  setDate(data['release_date']);
  setScore(data['vote_average'].toFixed(1));
  setOverview(data.overview);
  setGenres(data.genres);
  setStatus(Status.RESOLVED);
})
.catch(error => {
  setError(error);
  setStatus(Status.REJECTED);
});   
}, [movieId])

return (
  <Box>
    {status === Status.REJECTED && (<div>{error.message}</div>)}
    {status === Status.PENDING && <Loader />}
    {status === Status.RESOLVED && (<>
      <Link to={backLinkHref}><Button type="button">Go back</Button></Link>        
      <Card>
        <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt='poster' />
        <div>
          <h2>{title} ({date})</h2>
          <Subtitle>User Score: {score}</Subtitle>
          <Subtitle>Overview:</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres:</Subtitle>
          <TextGen>
            {genres.map(genre => genre.name).join(', ')}
          </TextGen>                        
        </div>
      </Card>
      <div>
        <Text>Additional information</Text>
          <DivList>
            <li>
              <Link to="cast" state={{ from: backLinkHref }}>Cast</Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: backLinkHref }}>Reviews</Link>
            </li>        
          </DivList>
      </div> 
      <Suspense fallback={<><Loader/></>}>
        <Outlet />
      </Suspense>          
    </>  
    )}        
</Box>
);
};

export default MoviesDetails;