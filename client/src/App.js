import React from "react";
import { Container} from "@mui/material";
import { GoogleOAuthProvider } from '@react-oauth/google';

import { BrowserRouter,Route,Routes, Navigate } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetaBrowserRouterils/PostDetails";


const App = () => {
  const user =JSON.parse(localStorage.getItem('profile'));
 
  return (
    <GoogleOAuthProvider clientId="162889179986-8q2h8saqlknhdrmm6odbqc379lg1b4s7.apps.googleusercontent.com">
    <>
    <Container maxWidth="xl">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Navigate to='/posts'/>}/>
        <Route path='/posts' exact element={<Home/>}/>
        <Route path='/posts/search' exact element={<Home/>}/>
        <Route path='/posts/:id' exact element={<PostDetails/>}/>
        <Route path='/auth' exact element={!user?<Auth/>:<Navigate to='/posts/'/>}/>
      </Routes>
    </Container>
    </>
    </GoogleOAuthProvider>
  );
};

export default App;
