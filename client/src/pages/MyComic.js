import React, {useEffect,useState} from 'react'
import styled from "styled-components";
import { Button} from "../styles";
import AddNewComic from './AddNewComic';
import {NavLink} from 'react-router-dom'




const MyComic=({user})=>{
const [comic,setComic]= useState('')

const {created_comics}= user



    return(
        <Wrapper>
            <NavLink to='/new'>Add a New Comic Here</NavLink>
            <br/>
 <WrapperChild>
    { created_comics ? created_comics.map((comic)=>{
       console.log(comic.id)
       return <div className="card mb-3" style={{maxWidth: "540px"}}>
       <div className="row no-gutters">
         <div className="col-md-4">
           <img src={comic.image} class="card-img" alt="N/A"/>
         </div>
         <div className="col-md-8">
           <div className="card-body">
             <h3 className="card-title">{comic.name}</h3>
             <h7 className="card-text">{`Release year ${comic?.release_year}`}</h7> 
                <br/>
             <h7 className="card-text">{`Published by ${comic?.publisher}`}</h7> 
             <br/>
             <em className="card-text">{`Issue # ${comic.issue_number ? comic.issue_number: "N/A"} out of ${comic?.count_of_issues}`}</em> 
             {/* <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
           </div>
         </div>
       </div>
       <Button onClick={(e)=>{e.preventDefault()
       fetch(`api/comics/${comic.id}`,{
        method: 'DELETE',
    })}}>delete</Button>
     </div>
    }) :null}



</WrapperChild>
</Wrapper>
        
    )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;
const WrapperChild = styled.div`
  flex: 1;
`;

export default MyComic