import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { 
    Item,
    Title
} from "./styles";

const LinkDiv = styled(Link)`
    text-decoration: none;
`;

const MoviesList = ({ films }) => {  
const location = useLocation();

return (
    films.map(film => {
        return <Item key={film.id}>
            <LinkDiv to={`/movies/${film.id}`} state={{ from: location }}>
                {film['poster_path'] ? <img src={`https://image.tmdb.org/t/p/w200${film['poster_path']}`} alt='poster' />
                : <img src="https://burst.shopifycdn.com/photos/a-movie-clapper-board-film-roll-and-sprocket-wheel.jpg?width=500&format=pjpg&exif=1&iptc=1" alt="actor" width="200" height="300" />}
                <Title>{film.title}</Title>
            </LinkDiv>    
        </Item>
    })
);
};

MoviesList.propTypes = {   
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,           
        })
    )
}

export default MoviesList;