import {
    Box,
    chakra,
    Container,
    Image,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaHeart, FaTwitter } from 'react-icons/fa';

const Logo = () => {
    return (
        <Image 
            borderRadius="full"
            boxSize="32px"
            src="/images/logo.png"
            alt="Message in a bottle Logo"
        />
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    const url = process.env.URL || 'https://www.ilbottiglionediciro.it';
    const sharerMessage = `Send a message to anyone with a delay in opening. Like the Bottiglione di Ciro in #generation56k #netflix ${url}`;
    return (
        <Box
            bg={useColorModeValue('blue.50', 'blue.900')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={3}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Text>Made with <FaHeart style={{display: 'inline'}} color='var(--chakra-colors-red-400)' /> in Florence</Text>
                <Stack direction={'row'} spacing={3}>
                    <SocialButton label={'Share on TW'} href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(sharerMessage)}`}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'Share on FB'} href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton label={'Github'} href={'https://github.com/thejoin95'}>
                        <FaGithub />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}