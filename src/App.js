import React from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Product from "./Product";
//import RestController from './RestController';
//import Get from './Get'
//import PostLists from './RestController';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PostLists from "./Getproducts";
import GetUsers from "./Getuser";
import Home from "./Home";
import Navbar from "./components/Navbar";
import GetSubscription from "./subscription";

function App() {
  
  
  return (
    <div className="App">
      <Router>
      {
        window.location.pathname!=='/' && window.location.pathname !=='/signup' && <Navbar/>
      }
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        
      
        <div>
          <Route exact path="/getall">
            <PostLists />
          </Route>
          <Route exact path="/productadd">
            <Product />
          </Route>
          <Route exact path="/getuser">
            <GetUsers />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/subscription">
            <GetSubscription />
          </Route>
         
        </div>
      </Router>
    </div>
  );
}

export default App;
