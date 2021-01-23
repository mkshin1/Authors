import React from "react"

import {Link, navigate} from "@reach/router"
import axios from "axios"
import { useState } from "react"

const Table = ({authors, filteredList, listofAuthors}) => {

    // const [filteredAuthors, setfilteredAuthors] = useState([authors])
    
    
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8002/api/author/' + id)
            .then(() => filteredList(id))
            .catch(err => console.log(err))
        
    
    
    
        
        
        
        
    }
    

    return(
        <>
                
                <th>Author</th>
                <th>Action available</th>
    
                {
                    authors.map((author, idx) => {
                        return <tr> <td key={idx}>  {author.firstName} {author.lastName}
                        <Link to={`/edit/${author._id}`}>Edit</Link> 
                        <button onClick={(e) => deleteHandler(author._id)}>Delete 
                        </button></td>
                        </tr>
                    })
                }
            
        
        </>
    )
}

export default Table