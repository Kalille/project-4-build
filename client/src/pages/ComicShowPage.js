import React, {useState ,useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import AddToMyPage from "../components/AddToMyPage";
import styled from "styled-components";

function ComicShowPage({user,comic}) {
   
    // useEffect(()=>{

    //     fetch('/api/comics')
    //     .then(res=>res.json())
    //     // .then(res=>console.log(res))
    //     .then(r=>setComics(r))
    //   },[])

 
  // console.log(comic[0].publisher)
 
    return(

<Wrapper>
<WrapperChild>
         <center>
         <h1>Browse 100's of Comics</h1>
         </center>
   {comic ? comic.map((c, i)=>{
            const id = c.id
          
 return <div  className="grid-3-columns" key={i} >
           <div >
               <div className="card mb-3" style={{maxWidth: "100%"}}>
               <div class="row no-gutters">
    <div class="col-md-4">
        <img src={c?.image} class="card-img" alt="..."/>
         </div>
    <div class="col-md-8">
    <div class="card-body">
         <h5 class="card-title">{c.name}</h5>
         <p class="card-text">{`Published by ${c?.publisher}`}</p>
<p class="card-text">{`Release year ${c?.release_year}`}</p>

<p class="card-text"><small class="text-muted">{`Issue # ${c.issue_number ? c.issue_number: "N/A"} out of ${c?.count_of_issues}`}</small></p>
<AddToMyPage user={user} cid={id}/> 
<div> 
                                 {c.comments ? c.comments.map(comment=>{
                                 return <div key={comment.id}>
                                     <h4>Comments</h4>
                                     <p>{comment.description}</p>
                                     </div>
                                //  <p>{comment.users.username}</p>
                             }):null}</div>
    </div>
</div>
</div>
                
              </div>
        </div>
   </div>

}):null}   
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

export default ComicShowPage

