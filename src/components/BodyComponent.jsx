import React, { useState, useEffect } from "react";

import Courses from "./Courses";
import { NavBar } from "./NavBar";
import RegistrationForm from "./RegistrationForm";
import Contact from "./Contact";
import MultiFunction from "./MultiFunction";
import Home from "./Home";

export default function BodyComponent(){
    const [bodyComponent, setBodyComponent] = useState("")
    let result;

    if (bodyComponent === "courses") {
        result = <Courses/>
    } else if(bodyComponent === "registration") {
        result = <RegistrationForm/>
    } else if(bodyComponent === "contacts") {
        result = <Contact/>
    } else if(bodyComponent === "gallery") {
        result = <MultiFunction/>
    } else if(bodyComponent === "home") {
        result = <Home/>
    } else {
        result = null;
    }

    return (
        <div className="body-wrapper">
            <NavBar menuToRender={bodyComponent} menuToSet={setBodyComponent}/>
            {result}
        </div>
    );
}