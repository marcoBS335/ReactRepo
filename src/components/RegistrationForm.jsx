import React, { useState } from 'react'

export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    function validateInput() {
        if (name.length === 0 || mail.length === 0) {
            alert("Name or mail is not valid!")
        }
    }
    
    return (
        <div className="registration form">
            <label className="form-label">Name: <input type="text" onChange={(e) => {setName(e.target.value)}} required/><div id="formName">Hello {name}!</div></label>
            <label className="form-label">Email: <input type="email" onChange={(e) => {setMail(e.target.value)}} required/><div id="formMail">Your mail is {mail}.</div></label>
            <label className="form-label">Gender: 
                <label>Male <input type="radio" name="gender" value="Male"/></label>
                <label>Female <input type="radio" name="gender" value="Female"/></label>
                <label>Other <input type="radio" name="gender" value="Other"/></label>
            </label>
            <label className="form-label">Select course:
                <select name="selectCourse">
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                    <option value="C">C</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Matlab">Matlab</option>
                    <option value="Lisp">Lisp</option>
                    <option value="VB">VB</option>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
            </label>
            <label className="checkbox-form form-label">Software knowledge: 
                <label>Development <input type="checkbox" name="development" value="Development"/></label>
                <label>Build and Deployment <input type="checkbox" name="bad" value="Build and Deployment"/></label>
                <label>DevOps <input type="checkbox" name="devops" value="DevOps"/></label>
            </label>
            <button className="btn btn-outline-info" type="submit" onClick={() => validateInput()}>Register</button>
        </div>
    )
}
