import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import 'bootstrap/dist/css/bootstrap.css'
import ComicShowPage from "../pages/ComicShowPage";
import MyPage from "../pages/MyPage";
import MySelection from "../pages/MySelection";
import EditCommentPage from "../pages/EditCommentPage";
import ComicForm from "../components/ComicForm";
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
            <MySelection user={user}/>
          </Route>
          <Route path='/new'>
            <ComicForm  user={user}/>
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
