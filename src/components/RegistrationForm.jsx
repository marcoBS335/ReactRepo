import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Radio,
    RadioGroup,
    Stack,
    Checkbox,
    CheckboxGroup,
    HStack,
    Button,
    Heading,
    Textarea
  } from "@chakra-ui/react"

  import {  } from "@chakra-ui/react"

export default function RegistrationForm() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    function validateInput() {
        if (name.length === 0 || mail.length === 0) {
            alert("Name or mail is not valid!")
        }
    }
    
    return (
        <form className="registration form">
            <Heading as="h2" size="xl" color="green.100" style={{marginBottom: '4vh'}}>
                Register now!
            </Heading>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Name"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="name@organization.domain"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Phone number</FormLabel>
                <Input type="tel" placeholder="Phone number" />
            </FormControl>
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup>
                    <Stack direction="row">
                        <Radio value="m" colorScheme="green">Male</Radio>
                        <Radio value="f" colorScheme="green">Female</Radio>
                        <Radio value="o" colorScheme="green">Other</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Designation</FormLabel>
                <Input type="text"></Input>
            </FormControl>
            <FormControl>
                <FormLabel>Location</FormLabel>
                <Input type="text"></Input>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Course</FormLabel>
                <Select placeholder="Select course">
                    <option value="c++">C++</option>
                    <option value="java">Java</option>
                    <option value="c#">C#</option>
                    <option value="c">C</option>
                    <option value="js">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="matlab">Matlab</option>
                    <option value="lisp">Lisp</option>
                    <option value="vb">VB</option>
                    <option value="ruby">Ruby</option>
                    <option value="php">PHP</option>
                    <option value="swift">Swift</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Sowtware development knowledge</FormLabel>
                <CheckboxGroup colorScheme="green">
                    <HStack>
                        <Checkbox fill="#08cea3">Develeopement</Checkbox>
                        <Checkbox fill="#08cea3">Build and Deployment</Checkbox>
                        <Checkbox fill="#08cea3">DevOps</Checkbox>
                    </HStack>
                </CheckboxGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Remarks</FormLabel>
                <Textarea placeholder="Here is a sample placeholder" />
            </FormControl>
            <Button type="submit" background="#08cea3" color="white" mt="25px">Button</Button>
        </form>
    )
}
