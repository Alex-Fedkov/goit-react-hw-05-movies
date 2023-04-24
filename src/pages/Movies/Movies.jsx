import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "components/Loader/Loader";
import MoviesList from "components/MoviesList/MoviesList";
import { toast } from 'react-toastify';
import { 
  List, 
} from "./styles"

const Status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
};

const Movies = () => { 
const [status, setStatus] = useState(null);
const [error, setError] = useState(null);
const [films, setFilms] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get("query")??'';

useEffect(() => {
const URL = `https://api.themoviedb.org/3/search/movie?api_key=cfb2a4b5cdc00428d1d82e24b55ad28d&query=${query}&language=en-US&page=1&include_adult=false`;
if (!query) return;
setStatus(Status.PENDING);

fetch(URL).then(response => {
  if (response.ok) {                
    return response.json();
  }
    return Promise.reject(new Error('Error!'))
})
  .then(({ results }) => {
    if (results.length === 0) {
      toast.error('Sorry, there are no films matching your search query. Please try again.', { autoClose: 2000, });
    }
    setFilms(results);
    setStatus(Status.RESOLVED);             
})
.catch(error => {
    setError(error);
    setStatus(Status.REJECTED);
}); 

},[query])

const handleFormSubmit = (name) => {
  if (name) {
    setSearchParams({ query: name });
  }    
} 

return (<>
  <ToastContainer/>
  <SearchBar onSubmit={handleFormSubmit} query={query} />
  <div>
  {status === Status.PENDING  && <Loader />}
  {status === Status.REJECTED && (<div>{error.message}</div>)}
  {status === Status.RESOLVED && (<List><MoviesList films={films} /></List>)}  
  </div> 
</>    
);
};

export default Movies;
