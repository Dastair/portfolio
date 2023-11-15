import { IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react";

import{ SunIcon, MoonIcon} from "@chakra-ui/icons";

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()
    
    return(
        <IconButton aria-label={ "Dark or Light Mode"}
            colorScheme ={useColorModeValue('purple', 'orange')}
            icon ={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
            onCLick={toggleColorMode}
        ></IconButton>
    )
    
}
export default ThemeToggleButton