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
import AddNewComic from "../pages/AddNewComic";
import '../App.css';
import MyComic from "../pages/MyComic";

function App() {
  const [user, setUser] = useState(null);
  const [comics,setComics]=useState('');
  const [comments,setComments]=useState('')

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
 

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
       
        <Switch>
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
            <MySelection addComment={setComments}user={user}/>
          </Route>
          <Route path='/new'>
            <AddNewComic addComic={setComics} user={user}/>
          </Route>
          <Route path='/comic'>
            <MyComic user={user}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
