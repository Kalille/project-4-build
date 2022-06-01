import React, { useEffect, useState } from "react"
import {useParams,useHistory} from 'react-router-dom'
import { Button,Textarea } from "../styles";
import DeleteComment from "../components/DeleteComment";

const EditCommentPage=()=>{
    const {id} = useParams()
    const [comment, setComment]=useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors]=useState('')
    const navigate = useHistory()

    useEffect(()=>{
        fetch(`/api/comments/${id}`)
        .then(res=>res.json())
        .then(res=>setComment(res))
    },[id])
console.log(comment.description,id)
    const handleChange=(e)=>{
        setDescription(e.target.value)
    }

    const handleSubmit=(e)=>{
        // debugger
         e.preventDefault()
        fetch(`/api/comments/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',
                    'Accept':'application/json'},
            body: JSON.stringify({
    
                description: description
              
            })
        }).then(res=>{
            if (res.ok){
                res.json().then(setDescription(...description,res))
           
                navigate.push('/mypage')
             }
             else{ 
                 res.json().catch(err=> alert(err.errors.exception.record.errors.full_messages))}
            
        })
    
    
    }

    return(
        <div>
            <p>
                <label> Your Original Comment</label>
               <Textarea value={`${comment.description}`} >  </Textarea>  <Button onClick={(e)=>fetch(`/api/comments/${id}`,{
            method: 'DELETE'
        })
        .then(navigate.push('/mypage'))}>delete</Button>
            </p>
            <form onSubmit={handleSubmit}>
            <Textarea onChange={handleChange} placeholder="Edit Comment..." type='text-field'>
             </Textarea>
             <Button> Edit</Button>
          
            </form>
        <p>{errors}</p>
        </div>
    )
}

export default EditCommentPage