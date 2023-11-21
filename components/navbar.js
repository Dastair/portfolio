import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
    Button, Icon
} from "@chakra-ui/react"
import{IoLogoGithub, IoLogoLinkedin, IoLogoGoogle} from "react-icons/io5";

import ThemeToggleButton from "./theme-toggle-button";
const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.700')
    return (
        <NextLink href={href} legacyBehavior>
            <Link
                p={2}
                bg={active ? 'navyBlue' : undefined}
                color={active ? '#ffffff' : inactiveColor}
            >
                {children}

            </Link>
        </NextLink>
    );


}

const Navbar = props => {
    const {path} = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container display="flex"
                       p={2}
                       maxW="container.md"
                       wrap="wrap"
                       align="center"
                       justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, nmd: 0}}
                >
                    <LinkItem href="/porto" path={path}>
                        Portfolio
                    </LinkItem>
                    <LinkItem href="https://drive.google.com/file/d/1GxVx-cP8SLnIya_kAOHF5ge03vdwSw4w/view" path={path}>
                        <Button rightIcon = {<Icon as = {IoLogoGoogle}/>} colorScheme = "teal">
                        Resume
                        </Button>
                    </LinkItem>
                    <LinkItem href ="https://www.linkedin.com/in/kiernan-nesslar-3b9a83251/" path ={path}>
                        <Button rightIcon={<Icon as = {IoLogoLinkedin}/>} colorScheme = "blue">
                            LinkedIn
                        </Button>
                    </LinkItem>
                    <LinkItem href = "https://github.com/Dastair" path = {path}>
                        <Button rightIcon ={<Icon as = {IoLogoGithub}/>} colorScheme = "green">
                            GitHub
                        </Button>
                    </LinkItem>
                    <Box flex = {1} >
                        <ThemeToggleButton/>

                    </Box>
                </Stack>


            </Container>

        </Box>
    )

}

export default Navbar