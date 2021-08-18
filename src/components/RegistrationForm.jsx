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
  import { useForm } from "react-hook-form";


export default function RegistrationForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        return new Promise((resolve) => {
            console.log(errors);
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resolve();
            }, 3000);
        });
    }
    
    return (
        <form className="registration form" onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h2" size="xl" color="green.100" style={{marginBottom: '4vh'}}>
                Register now!
            </Heading>
            <FormControl isRequired isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: "This is required",
                        minLength: { value: 4, message: "Minimum length should be 4" },
                        maxLength: { value: 50, message: "Maximum length should be 50" }
                      })
                    }
                ></Input>
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.mail}>
                <FormLabel>Email</FormLabel>
                <Input 
                    type="email" 
                    placeholder="name@organization.domain"
                    {...register("mail", {
                        required: "This is required",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Your input does not match common email pattern, check your input please." // JS only: <p>error message</p> TS only support string
                        }
                      })
                    }
                ></Input>
                <FormErrorMessage>
                    {errors.mail && errors.mail.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.number}>
                <FormLabel>Phone number</FormLabel>
                <Input 
                    type="tel"
                    placeholder="Phone number"
                    {...register("number", {
                        required: "This is required",
                        pattern: {
                            value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                            message: 'Number shouuld be provided like: 1234567899/123 456 7899/123-456-7899' // JS only: <p>error message</p> TS only support string
                        }
                      })
                    }
                />
                <FormErrorMessage>
                    {errors.number && errors.number.message}
                </FormErrorMessage>
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
            <FormControl isRequired isInvalid={errors.course}>
                <FormLabel>Course</FormLabel>
                <Select 
                    placeholder="Select course"
                    {...register("course", {
                        required: 'You have to choose course you want to register to!'
                      })
                    }
                >
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
                <FormErrorMessage>
                    {errors.course && errors.course.message}
                </FormErrorMessage>
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
            <Button type="submit" background="#08cea3" color="white" mt="25px">Register</Button>
        </form>
    )
}
