import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Textarea,
    Input,
    Stack,
} from "@chakra-ui/react"


export default function MessageModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [open, setOpen] = useState(props.isOpen);

    const values = {
        email: '',
        msg: '',
        date: '',
        time: '',
    };
    const [inputValues, setInputValue] = useState(values);

    useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen]);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        const obj = {};
        obj[name] = value;
        setTimeout(() => setInputValue({ ...inputValues, ...obj }), 200)
    };

    const toggleAlert = (isOpen, color, title, msg) => {
        const statusAlert = {
            isOpen,
            color,
            title,
            msg,
        };

        props.handleAlert(statusAlert)

        setTimeout(() => props.handleAlert({isOpen: false}), 6000);
    };

    const scheduleEmail = () => {
        const delayMs = new Date(`${inputValues.date} ${inputValues.time}`).getTime() - new Date().getTime();

        if (delayMs <= 0) {
            toggleAlert(true, 'red', 'Errore data', 'La data e ora devono essere futuri');
            return false;
        } else if (inputValues.email.length <= 5 || inputValues.msg.length <= 3) {
            toggleAlert(true, 'red', 'Mancano dei dati', 'Il messaggio e la email devono essere compilati e devono essere validi');
            return false;
        }

        fetch('https://sleepy-eyrie-05968.herokuapp.com/send-delayed', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                to: inputValues.email,
                text: inputValues.msg,
                delay: Math.abs(delayMs)
            })
        }).then((r) => {
            console.log(r);
            toggleAlert(true, 'green', 'Messaggio salvato', 'Messaggio schedulato correttamente');
        }, (err) => {
            console.log(err);
            toggleAlert(true, 'red', 'Qualcosa è andato storto', 'Il messaggio non è stato salvato. Riprova più tardi');
        })
    
        // setta e mostra lottie animation
        console.log(inputValues);
        props.handleClose();
    }

    return (
        <>
            <Modal
                isCentered
                onClose={props.handleClose}
                isOpen={props.isOpen}
                size='xl'
                motionPreset="slideInTop"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Scrivi, imposta e invia il tuo messaggio</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack direction={'column'}>
                            <strong>Email</strong>
                            <Input onKeyUp={handleChange}
                                name='email'
                                variant="flushed"
                                type='email'
                                placeholder='La email del tuo destinatario es. ciro@gmail.com'
                            />
                            <strong>Messaggio</strong>
                            <Textarea onKeyUp={handleChange} name="msg" variant="flushed" placeholder="Scrivi il tuo messaggio..." />
                            <strong>Data di recapito</strong>
                            <Input onChange={handleChange} name="date" variant="flushed" type='date' />
                            <strong>Orario di recapito</strong>
                            <Input onChange={handleChange} name="time" variant="flushed" type='time' placeholder="Imposta l'ora di invio" />
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" variant="gray">Annulla</Button>
                        <Button colorScheme="blue" mr={3} onClick={scheduleEmail}>
                            Invia
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}