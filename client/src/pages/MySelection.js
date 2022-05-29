import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import { useHistory} from 'react-router-dom'
import styled from "styled-components";
import { Textarea } from "../styles";

function MySelection({user}){
const [comic,setComic]=useState(null)
const [description, setDescription]=useState('')
const [errors,setErrors]=useState('')
const [on,setOff]=useState(false)
    const {id} = useParams()
const navigate = useHistory()

console.log(comic)


useEffect(()=>{
    fetch(`/api/comics/${id}`)
    .then(res=>res.json())
    // .then(res=>console.log(res))
    .then(data=>{setComic(data)})
    .catch(errors=>console.log(errors))
},[id])



// const handleSubmit=(e)=>{
//     e.preventDefault()
//     fetch('/api/comics',{
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json',
//                 'Accept' : 'application/json'}, 
//                 body: JSON.stringify(comic
//                     // name: comic.name,
//                     // release_year: comic.release_year,
//                     // publisher: comic.publisher,
//                     // image: comic.image,
//                     // issue_number: comic.issue_number,
//                     // count_of_issues: comic.count_of_issues,
//                     // creator_id: user.id



//                 )
//     }).then(res=>res.json())
// }
const handleSubmit=(e)=>{
    // debugger
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
             res.json().catch(err=> setErrors(err.errors))}
        
    })


}


    const handleChange=(e)=>{
        setDescription(e.target.value)
        // console.log(e.target.value)
    }
    // console.log(`my data ${description}, ${user.id},${id}`)
    if (!comic) return <h2>loading</h2>
    return(
        <div>
            <p>{errors}</p>

        <center>
             <h1>  {comic.name} </h1>
            <img className="card-img-top" src={comic?.image} alt="not available"/>
            <form onSubmit={handleSubmit}>
             <Textarea onChange={handleChange} type='text-field'>
             </Textarea>
             <button >Add Thoughts</button>
             </form>
             </center>
        </div>
    )
}


export default MySelection