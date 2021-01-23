import React, {useState} from "react"
import axios from "axios"
import {Link, navigate} from "@reach/router"

import Form from "../components/Form"

const AddAuthor = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [errors, setErrors] = useState([])
    // const [isBlank, setIsBlank] = useState(true)

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8002/api/add-author", {
            firstName: firstName,
            lastName: lastName
        })
        
        .then(() => navigate("/"))
        // .catch(err => res.status(400).json({message: "there is an error here"}))
        // .catch(err => console.log(err))
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    

        setFirstName("")
        setLastName("")
        setErrors([])
       
    

    }

    const cancelHandler = (e) => {
        navigate("/")
    }

    return(
        <>
            <h1>Favorite Author [add]</h1>
            <Form  
                firstName={firstName} 
                lastName={lastName} 
                setFirstName={setFirstName} 
                setLastName={setLastName} 
                submitHandler={submitHandler} 
                firstNameHandler={firstNameHandler} 
                lastNameHandler={lastNameHandler}
                cancelHandler={cancelHandler}
                errors={errors}
            />
            

        </>
    )
}

export default AddAuthor