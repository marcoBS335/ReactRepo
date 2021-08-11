import React from 'react'

export default function Contact() {
    const handleAlarm = () => {
        alert("you clicked the alarm")
    }

    return (
        <div className="registration form">
            <button onClick={handleAlarm}>Fire alarm</button>
        </div>
    )
}
