import { useState } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { 
    Form,
    Button,
    Input,
    Span,
} from "./styles";

const SearchBar = ({ onSubmit, query}) => {    
const [filmName, setFilmName] = useState(query);   
const handleNameChange = (e) => {
    setFilmName(e.currentTarget.value);        
}

const handleSubmit = (e) => {
    e.preventDefault();      

    if (filmName.trim() === '') {
        return toast.info('Enter a name for the film !', {autoClose: 2000,});
    }        
    onSubmit(filmName.trim().toLowerCase());      
}    

return (
    <Form onSubmit={handleSubmit}>
        <Button type="submit">
            <Span>Search</Span>
        </Button>
        <Input  
            name="search"
            type="text"
            placeholder="Search films .."
            value={filmName}
            onChange={handleNameChange}
        />
    </Form>
)    
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,  
    query: PropTypes.string.isRequired
}

export default SearchBar;
