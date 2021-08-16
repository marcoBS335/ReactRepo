import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Contact from "./Contact";
import Courses from "./Courses";
import MultiFunction from "./MultiFunction";
import RegistrationForm from "./RegistrationForm";
import Home from "./Home";

export const NavBar = React.memo(({ menuToRender, menuToSet }) => {
    
    function handleChange(param) {
        console.log("Clicked on button with param: ",param);
        // menuToSet(param);
    }
    
    return(
        <Router>
            <div className="navBar">
                <Link className="navbar-link" to="/" onClick={() => handleChange("home")}>Home</Link>
                <Link className="navbar-link" to="/courses"onClick={() => handleChange("courses")}>All courses</Link>
                <Link className="navbar-link" to="/registration"onClick={() => handleChange("registration")}>Registration</Link>
                <Link className="navbar-link" to="/gallery"onClick={() => handleChange("gallery")}>Gallery</Link>
                <Link className="navbar-link" to="/contacts"onClick={() => handleChange("contacts")}>Contact</Link>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/courses">
                    <Courses/>
                </Route>
                <Route path="/registration">
                    <RegistrationForm/>
                </Route>
                <Route path="/contacts">
                    <Contact/>
                </Route>
                <Route path="/gallery">
                    <MultiFunction/>
                </Route>
            </Switch>
        </Router>
    );
})