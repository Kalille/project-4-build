import React, {useState ,useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import AddToMyPage from "../components/AddToMyPage";
import styled from "styled-components";

function ComicShowPage({user}) {
   const [comics,setComics] = useState('')
   const [allusers, setAllusers] = useState('')
    useEffect(()=>{
         fetch('/api/comics')
        .then(res=>res.json())
        // .then(res=>console.log(res))
        .then(r=>setComics(r))
      },[])
      useEffect(()=>{
        fetch('/api/users')
        .then(res=> res.json())
        .then(res=> setAllusers(res))
      },[])
 
    return(

<Wrapper>
<WrapperChild>
         <center>
         <h1>Browse 100's of Komics</h1>
         </center>
   {comics ? comics.map((c)=>{
            const id = c.id
          
 return <div  className="grid-3-columns" key={c.id} >
           <div >
               <div className="card mb-3" style={{maxWidth: "100%"}}>
                   <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={c?.image} class="card-img" alt="..."/>
         </div>
                    <div className="col-md-8">
                     <div className="card-body">
                         <h5 className="card-title">{c.name}</h5>
                         <p className="card-text">{`Published by ${c?.publisher}`}</p>
                          <p className="card-text">{`Release year ${c?.release_year}`}</p>
                          <p className="card-text"><small class="text-muted">{`Issue # ${c.issue_number ? c.issue_number: "N/A"} out of ${c?.count_of_issues}`}</small></p>
                              <AddToMyPage user={user} cid={id}/> 
                            <br/>
                            <div> 
                                 {c.comments ? c.comments.map(comment=>{
                                  
                                 return <div key={comment.id}>
                                     <h4>{allusers ? allusers.map((data,i)=>{
                                       if (comment.user_id === data.id)
                                       return <h4 key={i}>{`${data?.username}'s thoughts`}</h4>
                                     }):null}</h4>
                                     <p>{comment?.description}</p>
                                     </div>
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

