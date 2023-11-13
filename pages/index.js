import { Container, Box, Heading } from "@chakra-ui/react";


const Page = () => {
    return <Container>
        <Box borderRadius = "lg" bg ="yellow" p ={3} mb = {6} align = "center">
            Hello, I am Computer Science student from Southern California!
        </Box>

        <Box display = {{md:'flex'}}>
            <Box flexGrow = {1}>
                <Heading as="h2" variant = "page-title">
                    Kiernan Nesslar
                </Heading>
                <p>Aspiring Game Developer/Designer</p>


            </Box>
        </Box>
    </Container>
}

export default Page