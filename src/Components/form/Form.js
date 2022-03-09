import { useState } from "react";

const Form = ({getValue}) => {


    const [submitValue,setSubmitValue] = useState();

    return ( 
        <form>
            <input 
            type="text"
            value={submitValue}
            className="input"
            placeholder="e.g domain.com"
            onChange={(e) => setSubmitValue(e.target.value)} />
            <button onClick={(e) => {
                e.preventDefault()
                getValue(submitValue)
                setSubmitValue('')
            }}>Search</button>
        </form>
     );
}
 
export default Form;