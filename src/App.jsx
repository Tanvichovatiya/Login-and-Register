import React from "react";

import Login from "./component/Login";
import SignIn from "./component/Signin";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";


const App = () => {
 return (
  <>
  <HashRouter>
  
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signin' element={<SignIn/>}></Route>



  </Routes>
  </HashRouter>
  </>
 )
};

export default App;
