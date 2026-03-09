import {Container, Box, Heading, Image, useColorModeValue, Button, Badge, Text} from "@chakra-ui/react";

import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import Layout from "../components/layouts/article";
import {ChevronRightIcon} from "@chakra-ui/icons";
import {BioSection, BioYear} from "../components/bio";

const Page = () => {
    return (<Layout>
    <Container>
        <Box borderRadius = "lg" bg ={useColorModeValue('blue.200','cyan.900')} p ={3} mb = {5} mt = {5} align = "center">
            Hello, My name is Kiernan Nesslar!
        </Box>

        <Box display = {{md:'flex'}}>
            <Box flexGrow = {1}>
                <Heading as="h2" variant = "page-title">
                    Kiernan Nesslar
                </Heading>
                <p>Software Engineer</p>


            </Box>
            <Box
                flexShrink = {0}
                mt={{base:4, md:0}}
                ml = {{md: 6}}
                align = "center"
            >
                <Image
                    borderColor = "whiteAlpha.800"
                    borderWidth={2}
                    borderStyle = "solid"
                    maxWidth = "150px"
                    display = "indline-block"
                    borderRadius = "full"
                    src = "/images/portpicture.jpg"
                    alt = "Profile Image"
                />
            </Box>
        </Box>
        <Section delay = {0.15} fade = {-10}>
            <Heading as = "h3" variant = "section-title">
                Who am I?
            </Heading>
            <Paragraph>I am a Computer Science and Classics graduate from Colorado College in sunny Colorado Springs, currently based in Austin, looking for challenging real-world experience
                across a wide range of industries.
                I am adaptable, great under pressure, and love to learn. I hope I can prove that to you in person as well</Paragraph>
            <Box align = "center" my={4}>
                <NextLink href="/porto">
                    <Button rightIcon={<ChevronRightIcon />} colorScheme = "yellow">
                        My Portfolio
                    </Button>

                </NextLink>
            </Box>
        </Section>
        <Section delay = {0.3} fade = {10}>
            <Heading as="h3" variant = "section-title">
                Experience &amp; Education
            </Heading>
            <BioSection>
                <BioYear>2003</BioYear>
                Born in Claremont, California
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Graduated from Claremont High School
            </BioSection>

            <Text fontWeight="bold" fontStyle="italic" mt={4} mb={2} fontSize="lg">Colorado College</Text>
            <BioSection>
                <BioYear>2025</BioYear>
                Graduation from Colorado College with a BA in Computer Science, an extra major in Classics and a minor in Linguistics
            </BioSection>
            <Box ml={70} borderRadius = "lg" bg ={useColorModeValue('teal.200','cyan.700')} w='29%' p ={3} mb = {5} mt = {5} align = "center">
                Software Design
                <Badge marginX={1} colorScheme = 'red'>Java</Badge>
                <Badge variant = 'subtle' colorScheme = 'green'>Git</Badge>
                <Badge colorScheme = 'gray'> DEV STANDARDS</Badge>
            </Box>
            <Box  ml={180} borderRadius = "lg" bg ={useColorModeValue('red.200','pink.900')} w = '40%' p ={3} mb = {5} mt = {5} align = "center">
                Computer Organization
                <Badge marginX={1} colorScheme = 'orange'>C</Badge>
                <Badge marginX={1} variant = 'subtle' colorScheme = 'green'>Git</Badge>
                <Badge colorScheme = 'yellow'> Memory Management</Badge>
            </Box>
            <Box ml ={75} borderRadius = "lg" bg ={useColorModeValue('green.200','green.900')} w = "55%" p ={3} mb = {5} mt = {5} align = "center">
                Data Structures and Algorithms
                <Badge marginX={1} colorScheme = 'purple'>Python</Badge>
                <Badge marginX={1} colorScheme = 'cyan'>Database Management</Badge>
                <Badge colorScheme = 'blue'> Algorithmic Efficiency</Badge>
            </Box>

            <Text fontWeight="bold" fontStyle="italic" mt={4} mb={2} fontSize="lg">FDM Group</Text>
            <BioSection>
                <BioYear>2025</BioYear>
                Software Engineer Consultant at FDM
            </BioSection>
            <Box ml={55} borderRadius="lg" bg={useColorModeValue('purple.200','purple.900')} w='35%' p={3} mb={5} mt={5} align="center">
                Java OOP<br/>
                <Badge marginX={1} colorScheme='blue'>REST Development</Badge>
                <Badge marginX={1} colorScheme='red'>TDD</Badge>
                <Badge marginX={1} colorScheme='green'>Spring Boot</Badge>
                
                
            </Box>
            <Box ml={160} borderRadius="lg" bg={useColorModeValue('orange.200','orange.900')} w='40%' p={3} mb={5} mt={5} align="center">
                Cloud Computing<br/>
                <Badge marginX={1} colorScheme='blue'>Docker</Badge>
                <Badge marginX={1} colorScheme='green'>Kubernetes</Badge>
                <Badge marginX={1} colorScheme='yellow'>GCP</Badge>
            </Box>
            <Box ml={55} borderRadius="lg" bg={useColorModeValue('blue.200','blue.900')} w='47%' p={3} mb={5} mt={5} align="center">
                Full Stack Pod
                <Badge marginX={1} colorScheme='orange'>Scrum Practices</Badge>
                <Badge marginX={1} colorScheme='cyan'>React.js</Badge>
                <Badge marginX={1} colorScheme='green'>Node.js</Badge>
            </Box>

            <BioSection>
                <BioYear>2026</BioYear>
                ...hopefully working with you!
            </BioSection>
        </Section>
        <Section delay={0.60} fade = {10}>
            <Heading as = "h3" variant="section-title">
                Other Passions
            </Heading>
            <Paragraph>
                Nature, Tabletop Games, Ancient Myth, Pro-Wrestling,
                Reading, Language Learning, Stopping to Smell the Roses

            </Paragraph>
        </Section>
    </Container>
        </Layout>)
}

export default Page