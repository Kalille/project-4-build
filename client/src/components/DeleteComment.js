import React from 'react'
import { useHistory } from 'react-router-dom'


const DeleteComment=({id})=>{
    const navigate = useHistory()
    const handleClick=()=>{
        fetch(`/api/comments/${id}`,{
            method: 'DELETE'
        })
        .then(navigate.push('/mypage'))
    }

    return(
        <button onClick={handleClick}>delete</button>
    )
}


export default DeleteComment