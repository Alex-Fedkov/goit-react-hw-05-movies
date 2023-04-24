import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {
    Item,
    Title
} from "./styles";

const LinkDiv = styled(Link)`
    text-decoration: none;
`;

const HomeList = ({ films }) => { 
    const location = useLocation();

return (
    films.map(film => {
    return <Item key={film.id}>
        <LinkDiv to={`/movies/${film.id}`} state={{ from: location }}>
            <img src={`https://image.tmdb.org/t/p/w200${film['poster_path']}`} alt='poster' />
            <Title>{film.title}</Title>
        </LinkDiv>    
    </Item>
    })
    );
};

HomeList.propTypes = {   
    films: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,           
    })
    )
}

export default HomeList;
