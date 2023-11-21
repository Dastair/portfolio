import {Container, Box, Heading, Image, useColorModeValue, Button} from "@chakra-ui/react";

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
                <p>Aspiring Game Developer/Designer</p>


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
            <Paragraph>I am a Computer Science student here at Colorado College in sunny Colorado Springs. My dream lies in
                in Game Development where I hope to give players the opportunities to craft stories that they can tell to their friends for years.
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