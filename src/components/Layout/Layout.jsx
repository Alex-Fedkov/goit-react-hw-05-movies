import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../Loader/Loader";
import { 
  Header,
  Nav
} from "./styles";

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    color: blue;
  }`;

const Layout = () => {   
return (
<div>
  <Header>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>        
      </Nav>            
  </Header>
    <Suspense fallback={<><Loader/></>}>
      <Outlet />
    </Suspense>
</div>
);
};

export default Layout;