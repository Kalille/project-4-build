import React from 'react'
import { useHistory } from 'react-router-dom'


const DeleteComment=({id})=>{
    const navigate = useHistory()
    const handleClick=(e)=>{
        e.preventDefault()
        fetch(`/api/comments/${id}`,{
            method: 'DELETE'
        })
        .then(navigate.push('/comics'))
    }

    return(
        <button onClick={handleClick}>delete</button>
    )
}


export default DeleteComment