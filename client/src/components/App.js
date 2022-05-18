import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [user, setUser] = useState(null);
  const [comics,setComics]=useState('')
  const key = "4b22c0361638acf814a29e4ebfbf3825d63abf6a"

  const url =`https://comicvine.gamespot.com/api/volumes/?api_key=${key}&format=json&sort=name:asc&filter=name:Walking%20Dead`
  // https://comicvine.gamespot.com/api/volumes/?api_key=4b22c0361638acf814a29e4ebfbf3825d63abf6a&format=json&sort=name:asc&filter=name:Walking%20Dead

useEffect(()=>{

  fetch('/api/comics')
  .then(res=>res.json())
  // .then(res=>console.log(res.results))
  .then(r=>setComics(r))
},[])

console.log(comics)
  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        Hello
       {/* {comics ? comics.results.map((comic, i)=>{
         return <div key={i}>
           <div class="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={comic?.image.original_url} alt="not available"/>
  <div className="card-body">
    <h5 className="card-title">{comic?.name}</h5>
     <h5>{`This volume has ${comic?.count_of_issues} issues`}</h5> 
     <h5>{`Release year ${comic?.start_year}`}</h5> 
     <h5>{`Issue # ${comic?.first_issue.issue_number}`}</h5> 
     <h5>{`Published by ${comic.publisher?.name}`}</h5> 

    <p className="card-text">{comic.description? comic.description :"not available"}</p>
    <a href={comic?.site_detail_url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
           </div>
       
       }):null}   */}
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
