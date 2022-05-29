import React, { useEffect, useState } from "react"
import {useParams,useHistory} from 'react-router-dom'
import { Textarea } from "../styles";

const EditCommentPage=()=>{
    const {id} = useParams()
    const [comment, setComment]=useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors]=useState('')
    const navigate = useHistory()
console.log(id)
    useEffect(()=>{
        fetch(`/api/comments/${id}`)
        .then(res=>res.json())
        .then(res=>setComment(res))
    },[id])

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
                setDescription(...description,res)
                navigate.push('/mypage')
             }
             else{ 
                 res.json().catch(err=> setErrors(err.errors))}
            
        })
    
    
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <Textarea onChange={handleChange} type='text-field'>
             </Textarea>
             <button> Edit</button>
            </form>
        <p>{errors}</p>
        </div>
    )
}

export default EditCommentPage