import { FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText, Button, Container, Grid, GridItem, Box, Textarea } from '@chakra-ui/react'
import {EmailIcon } from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleContactSubmit = (e) => {
        e.preventDefault();

        if(name == "" || email == "" || message == ""){
            toast.error("Please fill all fields", {
                position: toast.POSITION.TOP_CENTER
            })
        } else {
            toast.success("Message Sent!", {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <>
        <ToastContainer />
            <div className={styles.contactForm}>
                <p>Say Hello</p>
                <h2>Contact Us</h2>
                <div className={styles.contact}>
                <form onSubmit={(e) => handleContactSubmit(e)}>
                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                        value={name}
                        type="text"
                        placeholder="john Doe"
                        size="lg"
                        onChange={event => setName(event.currentTarget.value)}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                        value={email}
                        type="email"
                        placeholder="john.doe@domain.com"
                        size="lg"
                        onChange={event => setEmail(event.currentTarget.value)}
                        />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            value={message}
                            onChange={event => setMessage(event.currentTarget.value)}
                            placeholder='Write your message here...'
                            size='sm'
                        />
                    </FormControl>
                    
                    <Button
                        style={{borderRadius: '20px'}}
                        rightIcon={<EmailIcon />}
                        type="submit"
                        width="full"
                        mt={4}
                        colorScheme='red' size='md'
                    >
                        Send
                    </Button>
                    </form>
                </div>
            </div>
        </>
    )
}