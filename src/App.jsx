import React from "react";

import Login from "./component/Login";
import SignIn from "./component/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";


const App = () => {
 return (
  <>
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>



  </Routes>
  </BrowserRouter>
  </>
 )
};

export default App;
