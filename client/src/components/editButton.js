import React from "react"
import { useHistory } from "react-router-dom"


const EditButton = ({id}) => {
const navigate = useHistory()
console.log(id)
const handleClick=()=>{
    navigate.push(`/comment/${id}`)
}

    return(

           <button onClick={handleClick}> Edit Comment</button>
    )
}


export default EditButton