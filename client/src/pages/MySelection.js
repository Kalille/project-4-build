import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import { useHistory} from 'react-router-dom'

import { Error,Textarea, Button } from "../styles";

function MySelection({user, comments}){
const [comic,setComic]=useState(null)
const [description, setDescription]=useState('')
const [errors,setErrors]=useState([])

    const {id} = useParams()
const navigate = useHistory()




useEffect(()=>{
    fetch(`/api/comics/${id}`)
    .then(res=>res.json())
  
    .then(data=>{setComic(data)})
  
},[id])



const handleSubmit=(e)=>{
   e.preventDefault()
    fetch(`/api/comments`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                'Accept':'application/json'},
        body: JSON.stringify({

            description: description,
            user:   user,
            comic: comic
        })
    }).then(res=>{
        if (res.ok){
          
            navigate.push('/mypage')
         }
         else{
             res.json().then(err=>setErrors(err.errors))
            
         }
       })
     


}
const handleChange=(e)=>{
    setDescription(e.target.value)

 }    
    if (!comic) return <h2>loading...</h2>


            return(
<div className="grid-3-columns">
     <div>{errors?.map(err=>(
         <Error key={err}> {err}</Error>
     ))}</div>
        <center>
    <div className="card mb-3" style={{maxWidth: "100%"}}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={comic?.image} class="card-img" alt="..."/>
                 </div>
            <div className="col-md-8">
            <div className="card-body">
                 <h5 className="card-title">{comic.name}</h5>
                         <form onSubmit={handleSubmit}>
                         <Textarea  onChange={handleChange} type='text-field' placeholder="Enter Your Thoughts here...">
                        </Textarea>
                         <Button >Add Thought</Button>
                         <p>{description}</p>
                         </form>     
            </div>
    </div>
  </div>
</div>
        </center>    
        </div>
    )
}


export default MySelection


