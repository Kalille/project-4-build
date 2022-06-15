import React from 'react'
import AddToMyPage from "../components/AddToMyPage";


const ComicList =({comic,user,users})=>{





    return(
        <div>

{comic ? comic.map((c)=>{
            const id = c.id
          
 return <div  className="grid-3-columns" key={c.id} >
           <div >
               <div className="card mb-3" style={{maxWidth: "100%"}}>
                   <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={c?.image} className="card-img" alt="..."/>
         </div>
                    <div className="col-md-8">
                     <div className="card-body">
                         <h5 className="card-title">{c.name}</h5>
                         <p className="card-text">{`Published by ${c?.publisher}`}</p>
                          <p className="card-text">{`Release year ${c?.release_year}`}</p>
                          <p className="card-text"><small className="text-muted">{`Issue # ${c.issue_number ? c.issue_number: "N/A"} out of ${c?.count_of_issues}`}</small></p>
                              <AddToMyPage user={user} cid={id}/> 
                            <br/>
                            <div> 
                                 {c.comments ? c.comments.map(comment=>{
                                  
                                 return <div key={comment.id}>
                                     {users ? users.map((data,i)=>{
                                       if (comment.user_id === data.id)
                                       return <h4 key={i}>{`${data?.username}'s thoughts`}</h4>
                                     }):null}
                                     <p>{comment?.description}</p>
                                     </div>
                             }):null}
                             </div>
                              </div>
                         </div>
                    </div>
                
              </div>
        </div>
   </div>

}):null} 

        </div>
    )
}

export default ComicList