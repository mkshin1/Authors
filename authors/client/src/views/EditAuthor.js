import React, {useEffect, useState} from "react"
import axios from "axios"
import {Link, navigate} from "@reach/router"

import Form from "../components/Form"





const EditAuthor = ({id}) => {
   
    // const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    // const [editPage, setEditPage] = useState(false)
    
    // axios.get(`http://localhost:8002/api/authors/${id}`)
    // .then(res => console.log(res))
    // .catch(err => navigate("/error"))

    useEffect(() => {
        axios.get(`http://localhost:8002/api/authors/${id}`)
        .then(res => {setFirstName(res.data.author.firstName); setLastName(res.data.author.lastName)})
        .catch(err => navigate("/error"))

    }, [])
    
    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8002/api/update-author/${id}`, {
            firstName: firstName,
            lastName: lastName
        })


        .then(() => navigate("/"))
        // .catch(err => res.status(400).json({message: "there is an error here"}))
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })

        // setLoaded({loadedFirstName: firstName, loadedLastName: lastName})
        setFirstName("")
        setLastName("")

    }


    const cancelHandler = (e) => {
        navigate("/")
    }
    return(
        <>
            <h1>Favorite Author [edit]</h1>
            <Form  
                firstName={firstName} 
                lastName={lastName} 
                setFirstName={setFirstName} 
                setLastName={setLastName} 
                submitHandler={submitHandler} 
                firstNameHandler={firstNameHandler} 
                lastNameHandler={lastNameHandler}
                cancelHandler={cancelHandler }
                errors={errors}
                // loaded={loaded}
            />
            
        </>
    )
}

export default EditAuthor