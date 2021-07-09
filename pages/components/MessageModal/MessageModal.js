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

    useEffect(() => {
        setOpen(props.isOpen);
    }, [props.isOpen]);

    const scheduleEmail = () => {
        // fai post
        // mostra alert
        // setta e mostra lottie animation
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
                            <Input variant="flushed" type='email' placeholder='La email del tuo destinatario' />
                            <strong>Messaggio</strong>
                            <Textarea variant="flushed" placeholder="Scrivi il tuo messaggio..." />
                            <strong>Data di recapito</strong>
                            <Input variant="flushed" type='date' />
                            <strong>Orario di recapito</strong>
                            <Input variant="flushed" type='time' placeholder="Imposta l'ora di invio" />
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