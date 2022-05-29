import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import EditButton from '../components/editButton';


function MyPage({user,comment}){


    const {commented_comics,username,bio,image_url} = user
    console.log(commented_comics)
    console.log(bio)
    return(
//         <div class="card mb-3">
//   <img src={image_url} class="card-img-top" alt="your pic here"/>
//   <div class="card-body">
//     <h5 class="card-title">{username}</h5>
//     <p class="card-text">{bio}</p>
//     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//   </div>
//   </div>
<center>
<div class="card mb-3" style={{width:" 540px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={image_url} class="card-img" alt="N/A"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{username}</h5>
        <p class="card-text">{bio}</p>
        <p class="card-text"><small class="text-muted">{`totat comments ${user.commented_comics.length}`}</small></p>
      </div>
     
      {commented_comics ? commented_comics.map((cc, i)=>{
            // console.log(cc.id)
        
          return <div key={i}>  
           
          <div className="card" style={{width: "18rem;"}}>
  <img src={cc.image} class="card-img-top" alt=" n/a"/>
  <div className="card-body">
    <h5 className="card-title">{cc.name}</h5>
    {/* <p className="card-text">{cc.comments}</p> */}
    {comment ? comment.map((com,i)=>{
        const cid = [com.id]
        if (com.id === cc.id)
        return <div key={i}>
            <p className="card-text">{com.description} </p>
            <EditButton id={cid}/>
            </div>
        else
        <p>none available</p>
       

    }):null}
   
  </div>
</div>
          
          
          </div>
      }) :null}
    </div>
  </div>
</div>
</center>
    )
}


export default MyPage