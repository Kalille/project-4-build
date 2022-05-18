import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  const username = user.username
  return (
  
    <Wrapper>
   {`Welcome Back ${username}`}
      <Logo>
     
        <Link to="/">Comic Kraze </Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Recipe
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
      <NavLink
           to='/'
           
          //  style={link}
           activestyle={{
               color: 'gray',
               fontWeight: "bold"
           }}
           >
              Home
           </NavLink>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: linear-gradient(blue)
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color:  blue;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
