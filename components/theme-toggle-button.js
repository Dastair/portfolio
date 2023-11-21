import { IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {AnimatePresence, motion} from "framer-motion";
import {SunIcon, MoonIcon} from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()
    
    return(
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
            style={{display: 'inline-block'}}
            key ={useColorModeValue('light', 'dark')}
            initial={{y:20, x:-20, opacity:0}}
            animate={{y:0,x:0,  opacity:1}}
            exit={{y:20, x:20, opacity:0}}
            transition={{duration: 0.3}}
            >
        <IconButton aria-label={ "Dark or Light Mode"}
            colorScheme ={useColorModeValue('purple', 'orange')}
            icon ={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
            onClick={toggleColorMode}
        ></IconButton>
            </motion.div>
        </AnimatePresence>
    )
    
}
export default ThemeToggleButton