import {motion} from 'framer-motion'
import {chakra, shouldForwardProp} from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ children, delay = 0, fade = -10}) => (
    <StyledDiv
    initial={{x:fade, opacity:0}}
    animate ={{x:0, opacity: 1}}
    transition={{ duration: 0.8, delay }}
    mb={6}
    >
        {children}

    </StyledDiv>

)

export default Section