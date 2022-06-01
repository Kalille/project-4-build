import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import EditButton from '../components/editButton';
import EditCommentPage from './EditCommentPage';

function MyPage({user,comment}){


    const {created_comics,commented_comics,username,bio,image_url} = user
    console.log(commented_comics)
    console.log(bio)
    return(
        

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
     
      {commented_comics ? commented_comics.map((cc, i)=>{
             return <div key={i}>  
           
          <div className="card" style={{width: "18rem"}}>
                <img src={cc.image} class="card-img-top" alt=" n/a"/>
             <div className="card-body">
                <h5 className="card-title">{cc.name}</h5>

                        {comment ? comment.map((com,i)=>{
                                const cid = [com.id]
                                    if (com.comic_id === cc.id)
                    return <div key={i}>
                                <p className="card-text">{com.description} </p>
                                <EditButton commentDescription={com.description}id={cid}/>
                            </div>
                     else
                              <p>none available</p>}):null}
        </div>
         </div>  
         </div>}) :null}
         </div>
         </div>
        <div>
    </div>
</div>

    )
}


export default MyPage