import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";
import HomeList from "components/HomeList/HomeList";
import { 
    Box,
    Title, 
    List
} from "./styles"

const Status = {
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
};

const Home = () => {
    const [status, setStatus] = useState(null);
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=cfb2a4b5cdc00428d1d82e24b55ad28d`;

        setStatus(Status.PENDING);

        fetch(URL).then(response => {
            if (response.ok) {                
                return response.json();
            }
            return Promise.reject(new Error('Error!'))
        })
        .then(({ results }) => {               
            setFilms(results);
            setStatus(Status.RESOLVED);             
        })
        .catch(error => {
            setError(error);
            setStatus(Status.REJECTED);
        });   
    },[])


return (
    <Box>
        <Title>Trending today</Title>
        {status === Status.PENDING  && <Loader />}
        {status === Status.REJECTED && (<div>{error.message}</div>)}          
        {films && (<List><HomeList films={films} /></List>)}
    </Box>
);
};

export default Home;
