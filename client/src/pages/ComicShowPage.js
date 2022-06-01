import React, {useState ,useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import AddToMyPage from "../components/AddToMyPage";
import styled from "styled-components";

function ComicShowPage({user,comic}) {
    const [comics,setComics]=useState()
    // useEffect(()=>{

    //     fetch('/api/comics')
    //     .then(res=>res.json())
    //     // .then(res=>console.log(res))
    //     .then(r=>setComics(r))
    //   },[])

 
  console.log(user)
 
    return(
        <Wrapper>
        <WrapperChild>
                 <center>
                 <h1>Browse 100's of Comics</h1>
                 </center>
           {comic ? comic.map((c, i)=>{
                    const id = c.id
                  
         return <div  className="cards" key={i} >
                   <div >
                       <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={c?.image} alt="not available"/>
                            <div className="card-body">
                                 <h5 className="card-title">{c?.name}</h5>
                                 <h5>{`Release year ${c?.release_year}`}</h5> 
                                 <em>{`Issue # ${c.issue_number ? c.issue_number: "N/A"} out of ${comic?.count_of_issues}`}</em> 
                                 <h5>{`Published by ${comic?.publisher}`}</h5>
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