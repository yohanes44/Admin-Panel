
import React, {useState, useEffect} from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import  Login  from "./pages/login/Login";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";

import "./style/dark.scss"

function App() {

  const [dark, setDark] = useState(false);

  return (
    
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} setDark={setDark}/>
            <Route path="login" element={<Login/>} setDark={setDark} /> 
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/> 
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/> 
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/> 
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
