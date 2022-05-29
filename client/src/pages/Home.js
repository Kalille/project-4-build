import React from 'react'
import styled from "styled-components";

function Home(){


    return(
        <div>
            {/* <h1> <Logo>Comic Kraze</Logo></h1> */}
            <h1> Welcome to Comic Kraze where you can browse 100's of comics </h1>
        </div>
    )
}


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

export default Home