import React, {useState, useEffect} from "react"
import axios from "axios"
import {Link, navigate} from "@reach/router"

import Table from "../components/Table"

const Home = () => {
    
    const [authors, setAuthors] = useState([])
    const [urlError, seturlError] = useState(null)

    
    useEffect(() => {
        axios.get("http://localhost:8002/api/authors")
        .then(res => setAuthors(res.data.author))
        .catch(err => console.log(err))

    }, [])

    const filteredList = (id) => {
        setAuthors(authors.filter((author) => author._id !== id))

    }

    // console.log(authors)
    
    return(
        <>
            <h1>Favorite Author [home]</h1>
            <Link to="/add">Add an Author</Link>
            
            
            <p>We have quotes by:</p>
            <Table authors={authors} filteredList={filteredList}/>

        </>
    )
}

export default Home