import React, { useState} from 'react'
import { Button, Error, FormField, Input, Label} from "../styles";
import styled from "styled-components";
import { useHistory} from 'react-router-dom'


const ComicForm= ({user})=>{
const [name,setName]= useState('')
const [ReleaseYear,setRelease]= useState('')
const [publisher,setPublisher]= useState('')
const [image,setImage]= useState('')
const [issueNumber,setIssueNumber]= useState('')
const [countOfIssue,setCountOfIssue]= useState('')
const [errors,setErrors]= useState([])
const navigate = useHistory()

const handleName =(e)=>{
    setName(e.target.value)
}
const handleReleaseYear =(e)=>{
    setRelease(e.target.value)
}
const handlePublisher =(e)=>{
    setPublisher(e.target.value)
}
const handleImage =(e)=>{
    setImage(e.target.value)
}
const handleIssueNumber =(e)=>{
    setIssueNumber(e.target.value)
}
const handleCountOfIssue =(e)=>{
    setCountOfIssue(e.target.value)
}


const handleSubmit=(e)=>{
  
     e.preventDefault()
    fetch(`/api/comics`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                'Accept':'application/json'},
        body: JSON.stringify({

           name: name,
           release_year: ReleaseYear,
            publisher:   publisher,
            image: image,
            issue_number: issueNumber,
            count_of_issues: countOfIssue,

            creator_id: user.id
        })
    }).then(res=>{
        if (res.ok){
         
          navigate.push('/comics')
           }
         else{ 
           
          res.json().then(err=> setErrors(err.errors))
         
          }
        
    }
    )


}

    return(
        <Wrapper>
        <WrapperChild>
          <h2>Kreate a New Komic</h2>
          <form onSubmit={handleSubmit}>
       {errors?.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
           
        
            <FormField>
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
             
                onChange={handleName}
              />
            </FormField>
            <FormField>
              <Label htmlFor="">Publisher</Label>
              <Input
            
                onChange={handlePublisher}
              />
            </FormField>
            <FormField>
              <Label htmlFor="instructions">Release Year</Label>
              <Input
          
                onChange={handleReleaseYear}
              />
            </FormField>
            <FormField>
              <Label htmlFor="instructions">Number of Issues</Label>
              <Input
           
                onChange={handleCountOfIssue}
              />
            </FormField>
            <FormField>
              <Label htmlFor="instructions">Image</Label>
              <Input
            
                onChange={handleImage}
              />
            </FormField>
            <FormField>
              <Label htmlFor="instructions">Issue Number</Label>
              <Input
              
                onChange={handleIssueNumber}
              />
            </FormField>
            <FormField>
              <Button color="primary" type="submit">
               Submit
              </Button>
            </FormField>
        
          </form>
        </WrapperChild>
     
      </Wrapper>
    );
  }
  
  const Wrapper = styled.section`
    max-width: 1000px;
    margin: 40px auto;
    padding: 16px;
    display: flex;
    gap: 24px;
  `;
  
  const WrapperChild = styled.div`
    flex: 1;
  `;




export default ComicForm