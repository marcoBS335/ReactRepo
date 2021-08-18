import React from 'react'
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
    VStack,
    Heading,
    Textarea
  } from "@chakra-ui/react"
  import { useForm } from "react-hook-form";

export default function Contact() {
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
        <VStack align="center">
            <div className="mapSection" >
                <Heading as="h2" size="xl" color="green.100" style={{marginBottom: "5vh"}}>
                    Where you can find us
                </Heading>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231578.0842672364!2d21.093979725198377!3d48.69452260964403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee01b67c6957b%3A0x400f7d1c6978bd0!2zS2_FoWljZQ!5e0!3m2!1ssk!2ssk!4v1628154798594!5m2!1ssk!2ssk" width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>

            <form className="contact form" style={{marginBottom: "15vh"}} onSubmit={handleSubmit(onSubmit)}>
                <Heading as="h2" size="xl" color="green.100">
                    Contact us
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
                    <FormLabel>Designation</FormLabel>
                    <Input type="text"></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input type="text"></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Remarks</FormLabel>
                    <Textarea placeholder="Here is a sample placeholder" />
                </FormControl>
                <Button type="submit" background="#08cea3" color="white" mt="25px">Get in touch</Button>
            </form>
        </VStack>
    )
}
