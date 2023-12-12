import {Container, Heading, SimpleGrid, Divider} from "@chakra-ui/react";

import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import thumbCrossy from '../public/images/works/thumbCrossy.png'
import KDTree from '../public/images/works/KDTree.png'
import thumbWebsite from '../public/images/works/thumbWebsite.png'
import thumbCandle from '../public/images/works/thumbCandle.png'
import thumbReaper from '../public/images/works/reapThumb.png'
import thumbLantern from '../public/images/works/Lantern.jpg'
import Layout from "../components/layouts/article";

const Porto = () => {

    return ( <Layout>
        <Container>
            <Heading as = "h3" fontSize={20} mb={4} mt={5}>
                Portfolio
            </Heading>
            <SimpleGrid columns = {[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="https://github.com/ssameen/CrossyRoads" title= "Crossy Roads" thumbnail ={thumbCrossy}>
                        Java remake of the popular mobile game!
                    </WorkGridItem>
                    <WorkGridItem id="https://github.com/Dastair/KDTree-Map-Implementation" title = "KDTree Route Finding" thumbnail = {KDTree}>
                        Handmade KD Tree implementation of a maps-esque route finding application.
                    </WorkGridItem>
                    <WorkGridItem id="https://github.com/Dastair/portfolio" title = "This Website!" thumbnail = {thumbWebsite}>
                        My first foray into front-end development! Featuring hastily learned JS and Node skills and the joy of YouTube tutorials
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
            <Section delay={0.2}>
                <Divider my={6}/>
                <Heading AS = "h3" fontSize={20} mb={4}>
                    Side Projects
                </Heading>
                <Section>
                    <WorkGridItem id= "https://docs.google.com/document/d/16g5FjWjfQ0TRWJQqaI8z1dII2sNg2wJx_uxW2-b3Zz0/edit" title = "The Problem with Death" thumbnail = {thumbReaper}>
                        Written as apart of a 3 week Writing Workshop! A fantastical journey involving death, whimsy, and the indomitable human spirit!
                    </WorkGridItem>
                    <WorkGridItem id= "https://docs.google.com/document/d/1nWd-iUmwuB-JoK9HQ0Ryg9uZueK3dJxQmCcoVbuvirU/edit" title = "A Skeptics Conundrum" thumbnail = {thumbCandle}>
                        Written as apart of a 3 week Writing Workshop! What happens when the ultimate skeptic come face to face with irrefutable proof of the supernatural.
                    </WorkGridItem>
                </Section>

            </Section>
            <Section delay={0.3}>
                <Divider my={6}/>
                <Heading AS = "h3" fontSize={20} mb={4}>
                    WIP
                </Heading>
                <Section>
                    <WorkGridItem id= "https://github.com/Dastair/rogueLight" title = "Stealth-based lighting tech demo" thumbnail = {thumbLantern}>
                        Experimenting with 2d lighting systems and enemy states
                    </WorkGridItem>
                </Section>

            </Section>


        </Container>
        </Layout>
    )

}

export default Porto