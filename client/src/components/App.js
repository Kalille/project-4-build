import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import RecipeList from "../pages/RecipeList";
import NewRecipe from "../pages/NewRecipe";
import 'bootstrap/dist/css/bootstrap.css'
import ComicShowPage from "../pages/ComicShowPage";
import MyPage from "../pages/MyPage";
// import CommentsPage from "../pages/CommentsPage";
import MySelection from "../pages/MySelection";
import Home from "../pages/Home";
import EditCommentPage from "../pages/EditCommentPage";

function App() {
  const [user, setUser] = useState(null);
  const [comics,setComics]=useState('');
  const [comments,setComments]=useState('')
  const key = "4b22c0361638acf814a29e4ebfbf3825d63abf6a"

  const url =`https://comicvine.gamespot.com/api/volumes/?api_key=${key}&format=json&sort=name:asc&filter=name:Walking%20Dead`


  useEffect(() => {
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  useEffect(() => {
   
    fetch("/api/comments").then((r) => {
      if (r.ok) {
        r.json().then((comment) => setComments(comment));
      }
    });
  }, []);
  useEffect(() => {
   
    fetch("/api/comics").then((r) => {
      if (r.ok) {
        r.json().then((comic) => setComics(comic));
      }
    });
  }, []);
  // console.log(comics)

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
       
        <Switch>
        {/* <Route path="/">
            <Home user={user} />
          </Route> */}
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/comment/:id">
            <EditCommentPage  comic={comics} user={user} comment={comments}/>
          </Route>
          <Route path="/comics">
           <ComicShowPage comic={comics}user={user} />
          </Route>
          <Route path="/mypage">
           <MyPage  comic={comics} user={user} comment={comments} />
          </Route>
          
          <Route path='/comic/:id'>
            <MySelection user={user}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
