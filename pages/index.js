import {Container, Box, Heading, Image, useColorModeValue, Button, Badge} from "@chakra-ui/react";

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
                <p>Aspiring Software Developer/Designer</p>


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
                    src = "/images/profpic.png"
                    alt = "Profile Image"
                />
            </Box>
        </Box>
        <Section delay = {0.15} fade = {-10}>
            <Heading as = "h3" variant = "section-title">
                Who am I?
            </Heading>
            <Paragraph>I am a Computer Science student here at Colorado College in sunny Colorado Springs, currently looking for challenging real-world experience
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
                Time-Line
            </Heading>
            <BioSection>
                <BioYear>2003</BioYear>
                Born in Claremont, California
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Graduated from Claremont High School
            </BioSection>
            <BioSection>
                <BioYear>2025</BioYear>
                Graduation from Colorado College with a BA in Computer Science and a double minor in Classics and Linguistics
            </BioSection>
            <BioSection>
                <BioYear>Next...</BioYear>
                Perhaps working with you!
            </BioSection>
        </Section>
        <Section delay={0.45} fade = {-10}>
            <Heading as = "h3" variant="section-title">
                Computer Science Coursework
            </Heading>
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