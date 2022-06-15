import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import EditButton from '../components/editButton';

import styled from "styled-components";

function MyPage(){
const [comments,setComments] = useState([])
const [user,setUser]= useState('')
    useEffect(() => {
   
        fetch("/api/comments").then((r) => {
          if (r.ok) {
            r.json().then((comment) => setComments(comment));
          }
        });
      }, []);
      useEffect(() => {
        fetch("/api/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, []);

    return(
        
<Wrapper>
<WrapperChild>


    
<div className="card mb-3" style={{width:" 540px"}}> 
  <div className="row no-gutters">
        <div className="col-md-4">
             <img src={user.image_url} className="card-img" alt="N/A"/>
        </div>
              <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{` ${user.username}, Thanks for sharing your thoughts`}</h3>
                        <p className="card-text"><small className="text-muted">{`You Have ${user.commented_comics?.length} total comments `}</small></p>
                </div>
                <br/>
                <div>    
                    {user.commented_comics ? user.commented_comics.map((cc, i)=>{
                                return <div key={i}>  
           
                         <div className="card" style={{width: "18rem"}}>
                                    <img src={cc.image} className="card-img-top" alt=" n/a"/>
                        <div className="card-body">
                                     <h5 className="card-title">{cc.name}</h5>

                             {comments ? comments.map((com)=>{
                                
                                    if (com.comic_id === cc.id && com.user_id === user.id)
                                   
                                    return <div key={com.id}>
                                <p className="card-text">{com?.description} </p>
                                <EditButton  id={com.id}/>
                            </div>
                             }):null}
                           </div>
                        </div>  
                    </div>}) :null}
                    </div>
               </div>
           </div>
       <div>
   </div>
</div>
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


export default MyPage