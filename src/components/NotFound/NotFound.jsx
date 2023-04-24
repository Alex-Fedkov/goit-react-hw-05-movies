import { useNavigate } from "react-router-dom";
import { 
    Box,
    Text,
    Button,
} from "./styles";

const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/');
}

return (
<Box>
    <Text>Not Found</Text>
    <Button type="button" onClick={handleClick}>Go back</Button>
</Box>
)    
}

export default NotFound;
