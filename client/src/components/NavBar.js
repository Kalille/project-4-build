import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {

  const link ={
    
    width: '115px',
    padding: '13px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white'
   
}
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
      <div style={{fontSize:"35px"}}>{user ? `Welcome Back ${username}`: <Button>sign in</Button>}</div>
          <center>
      <Logo>
     
          <Link to="/signup">Comic Kraze </Link>
      </Logo>
      </center>
      <Nav>
          <NavLink
            to='/comic'
           
            style={link}
            activestyle={{
            color: 'gray',
            fontWeight: "bold"
           }}
           >
                  My Comics
           </NavLink>
           <NavLink
            exact to='/mypage'
           
            style={link}
            activestyle={{
            fontWeight: "bold",
            color: "red"
           }}
           >
              MY PAGE
           </NavLink>
           <NavLink
            exact to='/comics'
           
            style={link}
            activestyle={{
            fontWeight: "bold",
            color: "red"
           }}
           >
              COMICS
           </NavLink>
            <Button variant="outline" onClick={handleLogoutClick}>Logout </Button>
           </Nav> 
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  background: linear-gradient(blue)
`;

const Logo = styled.h1`
 
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color:  blue;
  margin: 0;
  line-height: 0.2;
  

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
