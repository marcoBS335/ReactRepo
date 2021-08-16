import React from 'react';
import { Image, Stack } from "@chakra-ui/react";
import logo1 from '../images/gallery/logo1.png';
import logo2 from '../images/gallery/logo2.jpg';
import logo3 from '../images/gallery/logo3.jpg';
import logo4 from '../images/gallery/logo4.jpg';

export default function MultiFunction() {
    function handleAlarm() {
        alert("you clicked the alarm")
    }

    function handleAlarm2() {
        alert("you clicked the 2nd alarm")
    }

    return (
        <div className="gallery">
            {/* <button onClick={() => {handleAlarm(); handleAlarm2()}}>Fire alarm</button> */}
            <Stack direction="row">
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={logo1}
                    alt="logo1"
                    fallbackSrc="https://via.placeholder.com/150"
                />
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={logo2}
                    alt="logo2"
                    fallbackSrc="https://via.placeholder.com/150"
                />
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={logo3}
                    alt="logo3"
                    fallbackSrc="https://via.placeholder.com/150"
                />
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={logo4}
                    alt="logo4"
                    fallbackSrc="https://via.placeholder.com/150"
                />
            </Stack>
        </div>
    )
}
