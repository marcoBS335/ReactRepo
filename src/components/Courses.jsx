import React from "react";
import { 
    // List,
    // ListItem,
    // ListIcon,
    // OrderedList,
    // UnorderedList,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/react"
  
export default function Courses() {
    
    return (
        <div className="courses-panel">
            <Tabs isFitted variant="enclosed" colorScheme="green">
                <TabList mb="1em">
                    <Tab>Front-End</Tab>
                    <Tab>Back-End</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                <AccordionButton _expanded={{ color: "#08cea3" }}>
                                    <Box flex="1" textAlign="left">
                                    JS - React
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton _expanded={{ color: "#08cea3" }}>
                                    <Box flex="1" textAlign="left">
                                    JS - Angular
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton _expanded={{ color: "#08cea3" }}>
                                    <Box flex="1" textAlign="left">
                                    JS - Vue
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                    <TabPanel>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                <AccordionButton _expanded={{ color: "#08cea3" }}>
                                    <Box flex="1" textAlign="left">
                                    JS - Express
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton _expanded={{ color: "#08cea3" }}>
                                    <Box flex="1" textAlign="left">
                                    Java - Spring
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}