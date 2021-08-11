import React from 'react'

export default function MultiFunction() {
    function handleAlarm() {
        alert("you clicked the alarm")
    }

    function handleAlarm2() {
        alert("you clicked the 2nd alarm")
    }

    return (
        <div className="registration form">
            <button onClick={() => {handleAlarm(); handleAlarm2()}}>Fire alarm</button>
        </div>
    )
}
