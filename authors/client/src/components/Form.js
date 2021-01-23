import React, {useState} from "react"

const Form = ({firstName, lastName, firstNameHandler,lastNameHandler, submitHandler, cancelHandler, authors, errors}) => {
    const [test, setTest] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    console.log(test, "************** this is the test state")
    return(
        <>
            <form>
                <h1>Reuseable Form</h1>
                <div className="form-input">
                    <label> First Name</label> 
                    <input type="text" className="title" onChange={firstNameHandler} value={firstName}></input>
                    {/* { firstName.length < 3  && firstName ?  <p>First Name must be 3 characters</p> : "" } */}
                </div>

                <div className="form-input">
                    <label>Last Name</label> 
                    <input type="text"className="price" onChange={lastNameHandler} value={lastName}></input>
                    {/* { lastName.length < 3  && lastName ? <p>Last Name must be 3 characters</p> : "" } */}
                </div>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Select Test</label>
                    <select>
                        value={test}
                        onChange={(e) => setTest(e.target.value)}
                    <option>Please Select</option>
                    <option value="test1">test1</option>
                    <option value="test2">test2</option>
                    <option value="test3">test3</option>
                    </select>
                </div>
                <div>
                    <label>Check Box</label>
                    <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                    ></input>
                </div>
                
                <button onClick={submitHandler}>Submit</button>
                <button onClick={cancelHandler}>Cancel</button>
            </form>

        </>
    )
}

export default Form