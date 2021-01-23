import React, {useState, useEffect} from "react"
import axios from "axios"
import {Router} from "@reach/router"
import './App.css';


import Home from "./views/Home"
import EditAuthor from "./views/EditAuthor"
import AddAuthor from "./views/AddAuthor"
import ErrorPage from "./views/ErrorPage"

import Alert from "./components/Alert"
import Form2 from "./components/Form2"

function App() {

  
  const [name, setName] = useState("")
  return (
    <div className="App">
      <Router>
        <ErrorPage path="/error"></ErrorPage>
        <Home path="/"></Home>
        <EditAuthor path="/edit/:id"> <Alert></Alert></EditAuthor>
        <AddAuthor path="/add"></AddAuthor>
      </Router>

      <Form2 />

    
    </div>
  );
}

export default App;
