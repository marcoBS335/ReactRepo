import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuIcon,
    // MenuCommand,
    // MenuDivider,
  } from "@chakra-ui/react"
  import { ChevronDownIcon } from '@chakra-ui/icons'
  import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import { useState, useEffect } from "react";
  
export default function Courses() {
    const [overState, setOverState] = useState({
        id1: false,
        id2: false
    });

    function handleMouseOver(idx, val) {
        console.log(overState);
        if (idx === 1) {
            console.log("set idx1");
            setOverState(prevState => ({
                id1: val,
                ...prevState
            }))
            console.log("set idx1", overState.id1);
        } else if (idx === 2) {
            console.log("set idx2");
            setOverState(prevState => ({
                ...prevState,
                id2: val
            }))
            console.log("set idx2", overState.id2);
        }
        console.log(overState);
    }

    let feElement, beElement    
    
    // if (overState.id1 === true) {
        feElement = (
            <div className="fe-courses">
                <UnorderedList>
                    <ListItem>JS - React</ListItem>
                    <ListItem>JS - Angular</ListItem>
                    <ListItem>JS - Vue</ListItem>
                </UnorderedList>
            </div>
        );
    // } else {
    //     feElement = null;
    // }

    // if (overState.id2 === true) {
        beElement = (
            <div className="fe-courses">
                <UnorderedList>
                    <ListItem>JS - Express</ListItem>
                    <ListItem>Java - Spring</ListItem>
                </UnorderedList>
            </div>
        );
    // } else {
    //     beElement = null;
    // }

    return (
        // <div class="dropdown">
        // <a id="dLabel" role="button" data-toggle="dropdown" class="btn btn-primary" data-target="#" href="#">
        //             Dropdown <span class="caret"></span>
        //         </a>
        // <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
        //     <li><a href="#">Some action</a></li>
        //     <li><a href="#">Some other action</a></li>
        //     <li class="divider"></li>
        //     <li class="dropdown-submenu">
        //     <a tabindex="-1" href="#">Hover me for more options</a>
        //     <ul class="dropdown-menu">
        //         <li><a tabindex="-1" href="#">Second level</a></li>
        //         <li class="dropdown-submenu">
        //         <a href="#">Even More..</a>
        //         <ul class="dropdown-menu">
        //             <li><a href="#">3rd level</a></li>
        //             <li><a href="#">3rd level</a></li>
        //         </ul>
        //         </li>
        //         <li><a href="#">Second level</a></li>
        //         <li><a href="#">Second level</a></li>
        //     </ul>
        //     </li>
        // </ul>
        // </div>
        <div className="courses-dropdown">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem onMouseOver={() => handleMouseOver(1, true)} onMouseOut={() => handleMouseOver(1, false)}>
                        FE
                        {/* <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                FE
                            </MenuButton>
                            <MenuList>
                                <MenuItem>JS - React</MenuItem>
                                <MenuItem>JS - Angular</MenuItem>
                                <MenuItem>JS - Vue</MenuItem>
                            </MenuList>
                        </Menu> */}
                    </MenuItem>
                    <MenuItem onClick={() => handleMouseOver(2, true)} onMouseOut={() => handleMouseOver(2, false)}>BE</MenuItem>
                    {/* <MenuList>
                        <MenuItem>JS - Express</MenuItem>
                        <MenuItem>Java - Spring</MenuItem>
                    </MenuList> */}
                </MenuList>
            </Menu>
            {overState.id1 ? feElement : null}
            {overState.id1 ? beElement : null}
            {/* <div class="btn-group">
                <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#">BE</a>
                        <ul class="dropdown-menu">
                            <a class="dropdown-item" href="#">JS - Express</a>
                            <a class="dropdown-item" href="#">Java - Spring</a>
                        </ul>
                    </li>
                    <li><hr class="dropdown-divider"/></li>
                    <li>
                        <a class="dropdown-item" href="#">FE</a>
                        <ul class="dropdown-menu">
                            <a class="dropdown-item" href="#">JS - React</a>
                            <a class="dropdown-item" href="#">JS - Angular</a>
                            <a class="dropdown-item" href="#">JS - Vue</a>
                        </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <ul className="courses-list">
                    <li>FE - JS, React</li>
                    <li>BE - JS, Express</li>
                    <li>BE - Java, Spring</li>
                    <li>BE - C#, .NET</li>
                </ul>
            </div> */}
        </div>
        
    );
}