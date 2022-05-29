import React from 'react'


function CommentsPage({comic,comment, user}){
    console.log(comic[0])
        return(
            <div>
               {} 
            {comment ? comment.map((c,i)=>{
                
                if(user.id === c.user_id )
               
                // comic.map(com=>{
                //     if (com.id === c.id)
                //    return com
                   
                  
                    
                // })
                return <div key={i}>
                   
                    <p>{c.description}</p></div>
               else
               <div>  <p>no comments available</p></div>
               
            }):null}


            </div>
        )
}

export default CommentsPage