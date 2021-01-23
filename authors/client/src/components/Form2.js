import React, {useState} from "react"

const Form2 = () => {
    const [test, setTest] = useState("")
    const [isChecked, setIsChecked] = useState(false)

    console.log(test, "************** this is the test state")
    return(
        <>
            <form>
                <h1>Reuseable Form</h1>
                
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
    
            </form>

        </>
    )
}

export default Form2