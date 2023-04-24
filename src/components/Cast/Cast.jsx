import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";
import {
  Container,
  Item,
  Name,
  Character
} from "./styles";

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]); 
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

useEffect(() => {
const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cfb2a4b5cdc00428d1d82e24b55ad28d`;       

setStatus(Status.PENDING);
if (!movieId) return;

fetch(URL).then(response => {
  if (response.ok) {         
    return response.json();
  }
    return Promise.reject(new Error('Error!'))
})
.then(({cast}) => {         
setActors(cast);        
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
    {actors.length ? (<Container>          
      {actors.map(actor=>{
        return <Item key={actor.id}>
          {actor['profile_path'] ? <img src={`https://image.tmdb.org/t/p/w200${actor['profile_path']}`} alt='actor' /> :
            <img src="https://kartinkin.net/uploads/posts/2022-03/1646873406_66-kartinkin-net-p-inkognito-kartinki-72.png" alt="actor"  width="200" height="300" />}                  
          <Name>{actor.name}</Name>
          <Character>Character: {actor.character}</Character>
          </Item>      
        })}
      </Container>  
    ):<p>No information about the actors!</p>}   
  </div>
);
};

export default Cast;