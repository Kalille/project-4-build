import React, { useEffect, useState } from "react"
import {useParams,useHistory} from 'react-router-dom'
import { Error,Button,Textarea,FormField } from "../styles";


const EditCommentPage=()=>{
    const {id} = useParams()
    const [comment, setComment]=useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors]=useState([])
    const navigate = useHistory()

    useEffect(()=>{
        fetch(`/api/comments/${id}`)
        .then(res=>res.json())
        .then(res=>setComment(res))
    },[id])

    const handleChange=(e)=>{
        setDescription(e.target.value)
    }

    const handleSubmit=(e)=>{
   
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
                 res.json().then(err=> setErrors(err.errors))}
            
        })
    
    
    }

    return(
        <div>
            <p>
                <label> Your Original Comment</label>
               <Textarea value={`${comment?.description}`} >  </Textarea>  <Button onClick={(e)=>fetch(`/api/comments/${id}`,{
            method: 'DELETE'
        })
        .then(navigate.push('/mypage'))}>delete</Button>
            </p>
            <form onSubmit={handleSubmit}>
            <Textarea onChange={handleChange} placeholder="Edit Comment Here..." type='text-field'>
             </Textarea>
             <Button> Edit</Button>
             <FormField>
              {errors?.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
            </form>
      
        </div>
    )
}

export default EditCommentPage