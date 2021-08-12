import React from 'react'

export default function Contact() {
    const handleAlarm = () => {
        alert("you clicked the alarm")
    }

    return (
        // <div className="registration form">
        //     <button onClick={handleAlarm}>Fire alarm</button>
        // </div>
        <div className="mapSection" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231578.0842672364!2d21.093979725198377!3d48.69452260964403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee01b67c6957b%3A0x400f7d1c6978bd0!2zS2_FoWljZQ!5e0!3m2!1ssk!2ssk!4v1628154798594!5m2!1ssk!2ssk" width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}
