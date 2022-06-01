import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import EditButton from '../components/editButton';
import EditCommentPage from './EditCommentPage';
import styled from "styled-components";

function MyPage({user,comment}){


    const {commented_comics,username,bio,image_url} = user
    // console.log(commented_comics)
    // console.log(bio)
    return(
        
<Wrapper>
<WrapperChild>
<div className="card mb-3" style={{width:" 540px"}}> 
  <div className="row no-gutters">
        <div className="col-md-4">
             <img src={image_url} class="card-img" alt="N/A"/>
        </div>
              <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{` ${username}, Thanks for sharing your thoughts`}</h3>
                        <p className="card-text"><small class="text-muted">{`total comments ${user.commented_comics.length}`}</small></p>
                </div>
                <br/>
                <div>    
                    {commented_comics ? commented_comics.map((cc, i)=>{
                                return <div key={i}>  
           
                         <div className="card" style={{width: "18rem"}}>
                                    <img src={cc.image} class="card-img-top" alt=" n/a"/>
                        <div className="card-body">
                                     <h5 className="card-title">{cc.name}</h5>

                             {comment ? comment.map((com,)=>{
                                
                                    if (com.comic_id === cc.id)
                                   
                                    return <div key={com.id}>
                                <p className="card-text">{com.description} </p>
                                <EditButton  id={com.id}/>
                            </div>
                                     else
                              <p>none available</p>}):null}
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