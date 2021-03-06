import React, {useState ,useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.css'
import AddToMyPage from "../components/AddToMyPage";
import styled from "styled-components";
import ComicList from "../pages/ComicList"

function ComicShowPage({user}) {
   const [comics,setComics] = useState('')
   const [allusers, setAllusers] = useState('')
   const [pub, setPub] = useState('')
 
   const [data,setData] = useState('')
    useEffect(()=>{
         fetch('/api/comics')
        .then(res=>res.json())

        .then(r=>setComics(r))
      },[])
      useEffect(()=>{
        fetch('/api/users')
        .then(res=> res.json())
        .then(res=> setAllusers(res))
      },[])

      const handleSubmit=(e)=>{
        e.preventDefault()
        fetch(`/api/search/${pub}`)
        .then(res=>res.json())
     
        .then(res => setData(res))
    

      }
      const handleChange=(e)=>{
        setPub(e.target.value)
      }
//
    return(

<Wrapper>
<WrapperChild>

 <form onSubmit={handleSubmit}>
<input onChange={handleChange} type="text" placeholder="Search By Publisher"/>
<button>Find me</button>
 </form>
 {/* {data ? data.map((publisher,i)=>{
   return <div key={i}>{publisher?.name}</div>
 }):null} */}
         <center>
         <h1>Browse 100's of Komics</h1>
         </center>
   {data ? data.map((c)=>{
            const id = c.id
          
 return <div  className="grid-3-columns" key={c.id} >
           <div >
               <div className="card mb-3" style={{maxWidth: "100%"}}>
                   <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={c?.image} className="card-img" alt="..."/>
         </div>
                    <div className="col-md-8">
                     <div className="card-body">
                         <h5 className="card-title">{c.name}</h5>
                         <p className="card-text">{`Published by ${c?.publisher}`}</p>
                          <p className="card-text">{`Release year ${c?.release_year}`}</p>
                          <p className="card-text"><small className="text-muted">{`Issue # ${c.issue_number ? c.issue_number: "N/A"} out of ${c?.count_of_issues}`}</small></p>
                              <AddToMyPage user={user} cid={id}/> 
                            <br/>
                            <div> 
                                 {c.comments ? c.comments.map(comment=>{
                                  
                                 return <div key={comment.id}>
                                     {allusers ? allusers.map((data,i)=>{
                                       if (comment.user_id === data.id)
                                       return <h4 key={i}>{`${data?.username}'s thoughts`}</h4>
                                     }):null}
                                     <p>{comment?.description}</p>
                                     </div>
                             }):null}
                             </div>
                              </div>
                         </div>
                    </div>
                
              </div>
        </div>
   </div>

}):<ComicList comic={comics} users={allusers} user={user}/>}   
 </WrapperChild>
</Wrapper>

    )
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

export default ComicShowPage

